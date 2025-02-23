import { ResponseErrorBody } from '@/network/types';

export class ResponseError extends Error {
  constructor(
    message: string,
    public readonly body: ResponseErrorBody
  ) {
    super(message);
    this.name = 'NetworkError';
  }
}
