const BASE_URL = import.meta.env.VITE_TMDB_API_URL_BASE;

export interface ApiResponseWrapper<T> {
  results?: T;
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const results = await response.json();
  const data = results.results ?? results;
  return data;
}
