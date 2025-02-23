import { ResponseError } from '@/network/response-error';
import { HTTP_CODE_ERRORS } from '@/error-handling/errors';

export default function getErrorMessage(error: Error) {
  const fallbackErrorMessage = error.message;

  if (error instanceof ResponseError) {
    return getResponseErrorMessage(error) || fallbackErrorMessage;
  } else {
    return fallbackErrorMessage;
  }
}

const getResponseErrorMessage = (error: ResponseError) => {
  const { body } = error;

  if (body.statusCode in HTTP_CODE_ERRORS) {
    return HTTP_CODE_ERRORS[body.statusCode];
  }

  if (typeof body.message === 'string') {
    return body.message;
  }

  return body.message[0];
};
