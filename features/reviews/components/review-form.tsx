'use client';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Rating } from '@/features/reviews/types';
import RatingInput from '@/features/reviews/components/rating-input';
import { Button } from '@/components/ui/button';
import addReviewAction from '@/features/reviews/actions/add-review-action';
import EmployerSelect from '@/features/employers/components/employer-select';

function SubmitButton({ disabled }: { disabled: boolean }) {
  const formStatus = useFormStatus();

  return <Button disabled={disabled || formStatus.pending}>Додати</Button>;
}

interface Props {
  employerId: string;
  onSuccess: VoidFunction;
}

export default function ReviewForm({ employerId, onSuccess }: Props) {
  const [rating, setRating] = useState<Rating>(4);
  const [content, setContent] = useState('');

  const action = () =>
    addReviewAction({ employerId, rating, content }).then(onSuccess);

  return (
    <form className="flex flex-col gap-3" action={action}>
      <EmployerSelect />
      <RatingInput rating={rating} onChange={setRating} />
      <Textarea
        id="review"
        className="h-32"
        placeholder="..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <SubmitButton disabled={!content.trim()} />
    </form>
  );
}
