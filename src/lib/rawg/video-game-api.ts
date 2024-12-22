import axios from 'axios';

export interface VideoGame {
  id: number;
  name: string;
  cover?: {
    url: string;
  };
  summary?: string;
}

export const searchVideoGames = async (query: string): Promise<VideoGame[]> => {
  try {
    console.log('Attempting IGDB Search:', {
      query,
      clientId: import.meta.env.VITE_IGDB_CLIENT_ID,
      accessTokenPresent: !!import.meta.env.VITE_IGDB_ACCESS_TOKEN
    });

    const response = await axios.post('/igdb/games', 
      `search "${query}"; fields name, cover.url, summary; limit 5;`,
      {
        headers: {
          'Content-Type': 'text/plain',
          'Accept': 'application/json',
          'Client-ID': import.meta.env.VITE_IGDB_CLIENT_ID,
          'Authorization': `Bearer ${import.meta.env.VITE_IGDB_ACCESS_TOKEN}`
        },
        timeout: 10000
      }
    );

    console.log('IGDB Search Response:', {
      status: response.status,
      dataLength: response.data?.length || 0,
      firstResult: response.data?.[0]
    });

    return response.data || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Detailed Axios Error:', {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        statusText: error.response?.statusText,
        headers: error.response?.headers,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers
        }
      });
    }
    throw error;
  }
};