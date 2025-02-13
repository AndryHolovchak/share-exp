export interface ListResponse<T> {
  rows: T[];
  count: number;
}

export interface ListPaginationParams {
  page?: number;
  limit?: number;
}

export interface ListSearchParams {
  search?: string;
}

export interface ListParams extends ListPaginationParams, ListSearchParams {}
