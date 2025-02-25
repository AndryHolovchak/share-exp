import { Provider } from 'next-auth/providers/index';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';

export const authProviders: Provider[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    authorization: {
      params: {
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
        scope: 'openid profile email',
      },
    },
  }),
];

export const authOptions: NextAuthOptions = {
  providers: authProviders,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log('[jwt]', 'first login');
        console.groupEnd();

        return {
          ...token,
          id_token: account.id_token!,
          expires_at: account.expires_at!,
          refresh_token: account.refresh_token,
        };
      } else if (Date.now() < (token.expires_at as number) * 1000) {
        console.log('[jwt]', 'token is still valid');
        // Subsequent logins, but the `access_token` is still valid
        return token;
      } else {
        // Subsequent logins, but the `access_token` has expired, try to refresh it
        if (!token.refresh_token) throw new TypeError('Missing refresh_token');
        try {
          console.log('[jwt]', 'try to refresh token');
          // The `token_endpoint` can be found in the provider's documentation. Or if they support OIDC,
          // at their `/.well-known/openid-configuration` endpoint.
          // i.e. https://accounts.google.com/.well-known/openid-configuration
          const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            body: new URLSearchParams({
              client_id: process.env.GOOGLE_CLIENT_ID!,
              client_secret: process.env.GOOGLE_CLIENT_SECRET!,
              grant_type: 'refresh_token',
              refresh_token: token.refresh_token as string,
            }),
          });

          const tokensOrError = await response.json();

          if (!response.ok) throw tokensOrError;

          const newTokens = tokensOrError as {
            id_token: string;
            access_token: string;
            expires_in: number;
            refresh_token?: string;
          };

          console.log('[jwt]', { newTokens });

          return {
            ...token,
            id_token: newTokens.id_token,
            access_token: newTokens.access_token,
            expires_at: Math.floor(Date.now() / 1000 + newTokens.expires_in),
            // Some providers only issue refresh tokens once, so preserve if we did not get a new one
            refresh_token: newTokens.refresh_token
              ? newTokens.refresh_token
              : token.refresh_token,
          };
        } catch (error) {
          console.error('Error refreshing access_token', error);
          // If we fail to refresh the token, return an error, so we can handle it on the page
          token.error = 'RefreshTokenError';
          return token;
        }
      }
    },
    async session({ session, token }) {
      return { ...session, error: token.error, id_token: token.id_token };
    },
  },
};

declare module 'next-auth' {
  interface Session {
    id_token?: string;
    error?: 'RefreshTokenError';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id_token: string;
    expires_at: number;
    refresh_token?: string;
    error?: 'RefreshTokenError';
  }
}
