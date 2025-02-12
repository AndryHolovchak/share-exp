export interface NextPageProps<Params, SearchParams = {}> {
  params: Params;
  searchParams?: Promise<SearchParams>;
}
