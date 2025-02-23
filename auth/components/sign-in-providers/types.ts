import { OAuthProviderType } from 'next-auth/providers/oauth-types';
import { FC } from 'react';

export type AvailableSignInProvider = Extract<OAuthProviderType, 'google'>;

export interface SignInProviderConfig {
  Icon: FC;
  provider: AvailableSignInProvider;
}
