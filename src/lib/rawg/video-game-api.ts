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
    // Attempt API call using proxy
    const response = await axios.post('/igdb/games', 
      `search "${query}"; 
      fields name, cover.url, summary; 
      limit 5;`,
      {
        headers: {
          'Content-Type': 'text/plain',
          'Accept': 'application/json'
        },
        timeout: 10000
      }
    );

    // Log successful response details
    console.log('IGDB Search Response:', {
      status: response.status,
      dataLength: response.data?.length || 0,
      firstResult: response.data?.[0]
    });

    return response.data || [];
  } catch (error) {
    // Comprehensive error logging
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
    } else {
      console.error('Unexpected Error:', error);
    }

    // Return empty array to prevent breaking the UI
    return [];
  }
};