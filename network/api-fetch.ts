import { API_URL } from '@/constants/config-global';
import { FetchConfig } from '@/network/types';
import { ResponseError } from '@/network/response-error';
import { getServerSession, Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { authOptions } from '@/lib/next-auth';

async function pickSession() {
  let session: Session | null = null;

  try {
    session = await getServerSession(authOptions);
  } catch {
    session = (await getSession()) as Session;
  }

  return session;
}

export async function apiFetch<Response>(
  endpoint: string,
  config?: FetchConfig
): Promise<Response | null> {
  const queryString = new URLSearchParams(
    (config?.searchParams || {}) as Record<string, string>
  ).toString();

  const session = await pickSession();

  console.log(session?.id_token);

  const response = await fetch(`${API_URL}${endpoint}?${queryString}`, {
    ...config?.options,
    credentials: 'include',
    headers: {
      ...config?.options?.headers,
      Authorization: session?.id_token ? `Bearer ${session.id_token}` : '',
    },
  });

  if (!response.ok) {
    const body = await response.json();
    throw new ResponseError(response.statusText, body);
  }

  try {
    const json = await response.json();
    return json;
  } catch {
    return null;
  }
}

export async function apiGet<Response>(
  endpoint: string,
  searchParams?: FetchConfig['searchParams'],
  options?: FetchConfig['options']
): Promise<Response | null> {
  return apiFetch(endpoint, { searchParams, options });
}

export async function apiAction<Response>(
  endpoint: string,
  config: {
    body?: any;
    method?: 'POST' | 'PUT' | 'DELETE';
    options?: FetchConfig['options'];
  }
): Promise<Response | null> {
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
