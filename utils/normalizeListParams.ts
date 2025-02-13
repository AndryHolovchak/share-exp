import { ListParams } from '@/types/list';

export function normalizeListParams(params: ListParams): Required<ListParams> {
  return {
    page: Math.max(1, params.page ?? 1),
    limit: Math.max(10, params.page ?? 10),
    search: params.search ?? '',
  };
}
