import { API_URL } from '@/constants/config-global';
import { FetchConfig } from '@/network/types';
import { ResponseError } from '@/network/response-error';
import { getServerSession } from 'next-auth';
import { SessionWithIdToken } from '@/lib/next-auth/types';
import { getSession } from 'next-auth/react';
import { authOptions } from '@/lib/next-auth';

async function pickSession() {
  let session: SessionWithIdToken | null = null;

  try {
    session = await getServerSession(authOptions);
    console.log({ serverSessionHasToken: !!session?.idToken });
  } catch {
    session = (await getSession()) as SessionWithIdToken;
    console.log({ clientSessionHasToken: !!session?.idToken });
  }

  return session;
}

export async function apiFetch<Response>(
  endpoint: string,
  config?: FetchConfig
): Promise<Response> {
  const queryString = new URLSearchParams(
    (config?.searchParams || {}) as Record<string, string>
  ).toString();

  let session = await pickSession();

  const response = await fetch(`${API_URL}${endpoint}?${queryString}`, {
    ...config?.options,
    headers: {
      ...config?.options?.headers,
      Authorization: session?.idToken ? `Bearer ${session.idToken}` : '',
    },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new ResponseError(response.statusText, body);
  }

  return response.json();
}

export async function apiGet<Response>(
  endpoint: string,
  searchParams?: FetchConfig['searchParams'],
  options?: FetchConfig['options']
): Promise<Response> {
  return apiFetch(endpoint, { searchParams, options });
}

export async function apiAction<Response>(
  endpoint: string,
  config: {
    body?: any;
    method?: 'POST' | 'PUT' | 'DELETE';
    options?: FetchConfig['options'];
  }
): Promise<Response> {
  const { body, method = 'POST', options } = config;
  return apiFetch(endpoint, {
    options: {
      ...options,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: body && JSON.stringify(body),
    },
  });
}
