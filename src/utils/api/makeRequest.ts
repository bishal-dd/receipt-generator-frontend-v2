const BASE_URL: string = process.env.NEXT_PUBLIC_APP_BACKEND_URI as string;

export const makeRequest = async (url: string, options: RequestInit) => {
  const response = await fetch(`${BASE_URL}/${url}`, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  // Parse the JSON response
  return response.json();
};
