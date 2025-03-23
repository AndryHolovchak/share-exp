import { Employer } from '@/features/employers/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { EmployerBaseInfo } from '@/features/employers/components/employer-base-info';

interface Props {
  employer: Employer;
  className?: string;
}

export default function EmployerCard({ employer, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex justify-between">
          <EmployerBaseInfo employer={employer} />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription
          dangerouslySetInnerHTML={{ __html: employer.shortDescriptionHtml }}
        ></CardDescription>
      </CardContent>
    </Card>
  );
}
