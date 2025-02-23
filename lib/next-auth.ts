import { Provider } from 'next-auth/providers/index';
import GoogleProvider from 'next-auth/providers/google';

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
