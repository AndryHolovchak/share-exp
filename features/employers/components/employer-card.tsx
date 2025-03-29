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

interface Props {
  employer: Employer;
  className?: string;
}

export default function EmployerCard({ employer, className }: Props) {
  return (
    <Link href={`/employers/${employer._id}/reviews`} key={employer._id}>
      <Card className={className}>
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
