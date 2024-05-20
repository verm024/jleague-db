import { FOOTBALL_API_BASE_URL } from '@/constants/network';

export async function customGetFootballAPI(
  endpoint: string,
  options: RequestInit
) {
  try {
    const headers: HeadersInit = {
      'x-rapidapi-key': process.env.NEXT_FOOTBALL_API_KEY || '',
    };

    const computedOpt: RequestInit = {
      ...options,
      headers: {
        ...options.headers,
        ...headers,
      },
      method: 'GET',
    };

    const res = await fetch(`${FOOTBALL_API_BASE_URL}${endpoint}`, computedOpt);
    const jsonData = await res.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}
