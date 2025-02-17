export interface NextPageProps<Params, SearchParams = {}> {
  params: Promise<Params>;
  searchParams: Promise<Partial<SearchParams>>;
}
