import { Employer } from '@/features/employers/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Props {
  employer: Employer;
}

export default function EmployerCard({ employer }: Props) {
  return (
    <Card>
      <CardHeader>
        <span>{employer.name}</span>
        <div className="flex gap-2">
          {employer.categories.map((category) => (
            <Badge>{category}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{employer.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
