export enum HttpStatusCode {
  UNAUTHORIZED = 401,
}

export interface ResponseErrorBody {
  statusCode: HttpStatusCode;
  message: string | string[];
}
