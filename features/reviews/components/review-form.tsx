import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { ReviewContent } from '@/features/reviews/types';
import RatingInput from '@/features/reviews/components/rating-input';
import { Button } from '@/components/ui/button';
import CheckboxField from '@/components/fields/checkbox-field';
import Editor from '@/components/ui/lexical/editor';

function SubmitButton() {
  const formStatus = useFormStatus();

  return <Button disabled={formStatus.pending}>Додати</Button>;
}

const DEFAULT_VALUES: ReviewContent = {
  ratings: {
    salary_and_benefits: 3,
    work_life_balance: 3,
    justice_and_equality: 3,
    career_growth: 3,
    management: 3,
  },
  content: '',
  anonymous: false,
};

export interface ReviewFormProps {
  defaultValues?: ReviewContent;
  onSubmit: (review: ReviewContent) => void;
}

export default function ReviewForm({
  onSubmit,
  defaultValues,
}: ReviewFormProps) {
  const [formValues, setFormValues] = useState<ReviewContent>(
    defaultValues || DEFAULT_VALUES
  );

  return (
    <form className="flex flex-col gap-3" action={() => onSubmit(formValues)}>
      <CheckboxField
        label="Анонімно"
        checked={formValues.anonymous}
        onCheckedChange={(value) =>
          setFormValues({ ...formValues, anonymous: value as boolean })
        }
      />
      {/*<RatingInput*/}
      {/*  rating={formValues.ratings}*/}
      {/*  onChange={(rating) => setFormValues({ ...formValues, ratings: rating })}*/}
      {/*/>*/}
      <Editor
        initialValue={formValues.content}
        onChange={(value) => setFormValues({ ...formValues, content: value })}
      />
      <SubmitButton />
    </form>
  );
}
