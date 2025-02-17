import { ResponseError } from '@/network/erorrs';

const extractResponseErrorMessage = (error: ResponseError) => {
  if ('message' in error.body) {
    return error.body.message[0];
  }

  return '';
};

export default function extractErrorMessage(error: Error) {
  const fallbackErrorMessage = error.message;

  if (error instanceof ResponseError) {
    return extractResponseErrorMessage(error) || fallbackErrorMessage;
  } else {
    return fallbackErrorMessage;
  }
}
