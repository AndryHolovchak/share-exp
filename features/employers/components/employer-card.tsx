import { Employer } from '@/features/employers/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiveStarRating } from '@/features/reviews/components/five-star-rating';

interface Props {
  employer: Employer;
}

export default function EmployerCard({ employer }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2">
          <span>{employer.name}</span>
          <FiveStarRating rating={employer.averageRating} />
        </div>

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
