import { OAuthProviderType } from 'next-auth/providers/oauth-types';
import { FC } from 'react';

export type AvailableSignInProviders = Extract<OAuthProviderType, 'google'>;

export interface SignInProviderConfig {
  Icon: FC;
  provider: AvailableSignInProviders;
}
