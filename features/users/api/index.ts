import { ListPaginationParams, ListResponse } from '@/types/list';
import { apiGet } from '@/network/api-fetch';
import { Review } from '@/features/reviews/types';

const USER_API = {
  fetchReviews: async (params: ListPaginationParams) =>
    apiGet<ListResponse<Review>>(`/user/reviews`, params),
};

export default USER_API;
