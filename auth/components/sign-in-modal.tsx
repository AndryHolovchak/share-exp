import SignInForm from '@/auth/components/sign-in-form';
import Modal, { ModalBaseProps } from '@/components/ui/modal';

export default function SignInModal(props: ModalBaseProps) {
  return <Modal title="Вхід" {...props} content={<SignInForm />} />;
}
