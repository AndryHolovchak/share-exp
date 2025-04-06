import EMPLOYERS_API from '@/features/employers/api';
import EmployerCard from '@/features/employers/components/employer-card';
import LinkButton from '@/components/ui/link-button';
import { ROUTES } from '@/constants/routes';
import FancyEmployersSearch from '@/features/employers/components/fancy-employers-search';
import PageIntro from '@/components/ui/page-intro';

export default async function Home() {
  const employers = await EMPLOYERS_API.fetchAllEmployers({
    page: 1,
    limit: 6,
  });

  return (
    <div className="flex flex-col gap-2">
      <PageIntro
        title={<h1 className="text-5xl font-bold">WorkLeaks</h1>}
        subtitle={
          <h2 className="text-2xl font-medium text-slate-700">
            Відкрий правду про роботу.
          </h2>
        }
        content={
          <div className="flex flex-col gap-6">
            <h3 className="text-md font-medium text-slate-600">
              Тут працівники діляться своїми реальними враженнями — хорошими,
              поганими і всіма нюансами. Без фільтрів, лише правда.
            </h3>
            <FancyEmployersSearch employers={employers?.rows || []} />
          </div>
        }
      />
      <div className="flex flex-col gap-2 p-2">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {employers?.rows.map((employer) => (
            <EmployerCard
              cardClassName="h-full"
              key={employer._id}
              employer={employer}
            />
          ))}
        </div>
        <LinkButton
          target="_self"
          href={ROUTES.EMPLOYERS()}
          variant="default"
          className="mx-auto w-1/3"
        >
          Показати Всіх
        </LinkButton>
      </div>
    </div>
  );
}
