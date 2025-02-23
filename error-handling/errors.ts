import { HttpStatusCode } from '@/network/types';

export const HTTP_CODE_ERRORS: Partial<Record<HttpStatusCode, string>> = {
  [HttpStatusCode.UNAUTHORIZED]: 'Користувача не знайдено',
};
