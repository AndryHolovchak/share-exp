import { PageContent } from '@/components/laylout/page-content';
import { Button } from '@/components/ui/button';
import EMPLOYERS_API from '@/features/employers/api';
import EmployerCard from '@/features/employers/components/employer-card';

export default async function Home() {
  const employers = await EMPLOYERS_API.fetchAllEmployers({
    page: 1,
    limit: 10,
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-primary-foreground sm:py-[80px] md:py-[120px]">
        <PageContent as="header" className="flex flex-col gap-10 text-center">
          <h1 className="text-5xl font-bold">WorkLeaks</h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium text-slate-700">
              Відкрий правду про роботу.
            </h2>
            <h3 className="text-md font-medium text-slate-600">
              Тут працівники діляться своїми реальними враженнями — хорошими,
              поганими і всіма нюансами. Без фільтрів, лише правда.
            </h3>
          </div>
          <Button className="w-full">Знайти Роботодавця</Button>
        </PageContent>
      </div>
      <div className="flex items-center gap-3 overflow-x-auto">
        {employers?.rows.map((employer) => (
          <EmployerCard
            key={employer._id}
            employer={employer}
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
