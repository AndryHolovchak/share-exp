'use client';

import { Employer } from '@/features/employers/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { EmployerBaseInfo } from '@/features/employers/components/employer-base-info';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  employer: Employer;
  cardClassName?: string;
  containerClassName?: string;
}

export default function EmployerCard({
  employer,
  containerClassName,
  cardClassName,
}: Props) {
  return (
    <Link
      className={containerClassName}
      href={`/employers/${employer._id}/reviews`}
      key={employer._id}
    >
      <Card className={cn('', cardClassName)}>
        <CardHeader className="pb-1">
          <div className="flex justify-between">
            <EmployerBaseInfo employer={employer} />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div
              className="text-slate-800"
              dangerouslySetInnerHTML={{
                __html: employer.shortDescriptionHtml,
              }}
            />
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
