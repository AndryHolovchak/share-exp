import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { ReviewFormValues } from '@/features/reviews/types';
import RatingInput from '@/features/reviews/components/rating-input';
import { Button } from '@/components/ui/button';
import CheckboxField from '@/components/fields/checkbox-field';
import Editor from '@/components/ui/lexical/editor';

function SubmitButton({ disabled }: { disabled: boolean }) {
  const formStatus = useFormStatus();

  return <Button disabled={disabled || formStatus.pending}>Додати</Button>;
}

interface Props {
  onSubmit: (review: ReviewFormValues) => void;
}

export default function ReviewForm({ onSubmit }: Props) {
  const [formValues, setFormValues] = useState<ReviewFormValues>({
    rating: 4,
    content: '',
    anonymous: false,
  });

  return (
    <form className="flex flex-col gap-3" action={() => onSubmit(formValues)}>
      <CheckboxField
        label="Анонімно"
        checked={formValues.anonymous}
        onCheckedChange={(value) =>
          setFormValues({ ...formValues, anonymous: value as boolean })
        }
      />
      <RatingInput
        rating={formValues.rating}
        onChange={(rating) => setFormValues({ ...formValues, rating })}
      />
      <Editor
        onChange={(value) => setFormValues({ ...formValues, content: value })}
      />
      <SubmitButton disabled={!formValues.content.trim()} />
    </form>
  );
}
