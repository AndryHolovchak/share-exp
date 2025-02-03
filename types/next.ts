export interface NextPageProps<Params, SearchParams = null> {
  params: Params;
  searchParams?: SearchParams;
}