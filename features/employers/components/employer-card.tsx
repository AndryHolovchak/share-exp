import { Employer } from '@/features/employers/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { EyeIcon } from 'lucide-react';
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
          <div className="flex-0 flex h-fit items-center gap-1 text-muted-foreground">
            <EyeIcon width={18} />
            {employer.totalViews}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{employer.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
