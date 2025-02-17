import { API_URL } from '@/constants/config-global';
import { enhancedFetch } from '@/network/enhanced-fetch';

interface Config {
  searchParams?: Record<string, any>;
  options?: RequestInit;
}

export async function apiFetch<Response>(
  endpoint: string,
  config?: Config
): Promise<Response> {
  const queryString = new URLSearchParams(
    (config?.searchParams || {}) as Record<string, string>
  ).toString();

  const response = await enhancedFetch(
    `${API_URL}${endpoint}?${queryString}`,
    config?.options
  );
  return response.json();
}

export async function apiGet<Response>(
  endpoint: string,
  searchParams?: Config['searchParams'],
  options?: Config['options']
): Promise<Response> {
  return apiFetch(endpoint, { searchParams, options });
}

export async function apiAction<Response>(
  endpoint: string,
  config: {
    body?: any;
    method?: 'POST' | 'PUT' | 'DELETE';
    options?: Config['options'];
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
