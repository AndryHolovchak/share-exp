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
        token.id_token = account.id_token;
      }

      return token;
    },
    async session({ session, token }) {
      return { ...session, idToken: token.id_token };
    },
  },
};
