const BASE_URL = import.meta.env.VITE_TMDB_API_URL_BASE;

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};
