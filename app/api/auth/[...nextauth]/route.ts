import NextAuth from 'next-auth';
import { authProviders } from '@/lib/next-auth';

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };
