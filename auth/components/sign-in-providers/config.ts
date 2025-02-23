import { SignInProviderConfig } from '@/auth/components/sign-in-providers/types';
import GoogleIcon from '../../../public/googe.svg';

export const SIGN_IN_PROVIDERS_CONFIG: SignInProviderConfig[] = [
  {
    Icon: GoogleIcon,
    provider: 'google',
  },
];
