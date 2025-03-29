'use client';

import { Employer, EmployerDetails } from '@/features/employers/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { EmployerBaseInfo } from '@/features/employers/components/employer-base-info';
import DataItemList, {
  DataItemListConfig,
} from '@/components/ui/data-item-list';
import { InfoIcon, LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LinkButton from '@/components/ui/link-button';
import { Separator } from '@/components/ui/separator';

interface Props {
  employer: Employer;
  className?: string;
}

const DATA_ITEM_LIST_CONFIG: DataItemListConfig<EmployerDetails> = [
  {
    key: 'website',
    icon: <LinkIcon />,
    render: ({ website }) => (
      <LinkButton href={website} target="_blank">
        Сайт
      </LinkButton>
    ),
  },
  {
    key: 'categoryDescription',
    icon: <InfoIcon />,
  },
];

export default function EmployerCard({ employer, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader className="pb-1">
        <div className="flex justify-between">
          <EmployerBaseInfo employer={employer} />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <DataItemList data={employer} config={DATA_ITEM_LIST_CONFIG} />
          <Separator className="my-3" />
          <div
            dangerouslySetInnerHTML={{ __html: employer.shortDescriptionHtml }}
          />
        </CardDescription>
      </CardContent>
    </Card>
  );
}
