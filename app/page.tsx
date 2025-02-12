import Link from 'next/link';

export default async function Home() {
  return (
    <main className="absolute left-1/2 top-1/3 flex -translate-x-1/2 flex-col gap-8">
      <h1 className="text-7xl font-bold tracking-[0.4em]">Відгуки</h1>
      <Link href="employers" className="self-center text-2xl underline">
        Список роботодавців
      </Link>
    </main>
  );
}
