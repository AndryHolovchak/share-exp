import { ResponseError } from '@/network/response-error';

export async function enhancedFetch(...params: Parameters<typeof fetch>) {
  const response = await fetch(...params);

  if (!response.ok) {
    const body = await response.json();
    throw new ResponseError(response.statusText, body);
  }

  return response;
}
