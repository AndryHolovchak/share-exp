import { Session } from 'next-auth';

export interface SessionWithIdToken extends Session {
  idToken: string;
}
