import { RequiredSignInModalConfig } from '@/auth/providers/required-sign-in-modal-provider/types';
import SignInForm from '@/auth/components/sign-in-form';
import Modal, { ModalBaseProps } from '@/components/ui/modal';

interface Props extends ModalBaseProps {
  config?: RequiredSignInModalConfig;
}

export default function RequiredSignInModal({ open, onClose, config }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="... Але спочатку, потрібно увійти"
      description={config?.description}
      content={<SignInForm />}
    />
  );
}
