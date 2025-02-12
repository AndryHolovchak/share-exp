import { API_URL } from '@/constants/config-global';

interface Config {
  searchParams?: Record<string, string | undefined | null>;
  options?: RequestInit;
}

export async function apiFetch<Response>(
  endpoint: string,
  config?: Config
): Promise<Response> {
  const queryString = new URLSearchParams(
    (config?.searchParams || {}) as Record<string, string>
  ).toString();

  const response = await fetch(
    `${API_URL}${endpoint}?${queryString}`,
    config?.options
  );
  return response.json();
}
