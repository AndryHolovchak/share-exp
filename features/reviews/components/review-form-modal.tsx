import Modal, { ModalBaseProps } from '@/components/ui/modal';
import ReviewForm, {
  ReviewFormProps,
} from '@/features/reviews/components/review-form';

interface Props extends ModalBaseProps {
  formProps: ReviewFormProps;
}

export default function ReviewFormModal({ formProps, ...props }: Props) {
  return (
    <Modal
      {...props}
      title="Відгук"
      description="Будь ласка, опишіть ваш досвід"
      content={<ReviewForm {...formProps} />}
      className="max-w-[840px]"
    />
  );
}
