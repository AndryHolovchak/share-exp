'use client';

import { Review, ReviewVote } from '@/features/reviews/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import REVIEWS_API from '@/features/reviews/api';
import useSignedInOnly from '@/auth/hooks/use-signed-in-only';
import { ADD_REVIEW_SIGN_IN_MODAL_CONFIG } from '@/auth/providers/required-sign-in-modal-provider/components/required-sign-in-modal/configs';

interface Props {
  className?: string;
  review: Pick<Review, '_id' | 'voteRating' | 'currentUserVote'>;
}

export default function ReviewVoteControls({ className, review }: Props) {
  const [userVote, setUserVote] = useState(review.currentUserVote);
  const [voteRating, setVoteRating] = useState(review.voteRating);

  useEffect(() => {
    setVoteRating(review.voteRating);
    setUserVote(review.currentUserVote);
  }, [review]);

  const vote = useSignedInOnly({
    fn: (vote: ReviewVote) => {
      if (userVote === vote) {
        setUserVote(null);
        setVoteRating((prev) => prev - vote);
        void REVIEWS_API.vote(review._id, null);
      } else {
        setUserVote(vote);
        setVoteRating((prev) => prev + (userVote === null ? vote : vote * 2));
        void REVIEWS_API.vote(review._id, vote);
      }
    },
  });

  return (
    <div
      className={clsx(
        'flex items-center rounded border border-slate-200',
        className
      )}
    >
      <button
        onClick={() => vote(-1)}
        className={clsx('text-red-300 transition-colors', {
          'text-red-500': userVote === -1,
        })}
      >
        <ChevronDown />
      </button>
      <span
        className={clsx('min-w-6 text-center text-sm text-muted-foreground', {
          'text-red-600': voteRating < 0,
          'text-green-600': voteRating > 0,
        })}
      >
        {voteRating}
      </span>
      <button
        onClick={() => vote(1)}
        className={clsx('text-green-300 transition-colors', {
          'text-green-500': userVote === 1,
        })}
      >
        <ChevronUp />
      </button>
    </div>
  );
}
