import SignInProviders from '@/auth/components/sign-in-providers/sign-in-providers';
import useSignIn from '@/auth/hooks/use-sign-in';

export default function SignInForm() {
  const { signIn } = useSignIn();

  return (
    <div>
      <SignInProviders onSelect={signIn} />
    </div>
  );
}
