import { SIGN_IN_PROVIDERS_CONFIG } from '@/auth/components/sign-in-providers/config';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function SignInProviders() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">Увійти за допомогою</span>
      {SIGN_IN_PROVIDERS_CONFIG.map(({ provider, Icon }) => (
        <Button
          key={provider}
          size="icon"
          className="bg-transparent"
          onClick={() => signIn(provider)}
        >
          <Icon />
        </Button>
      ))}
    </div>
  );
}
