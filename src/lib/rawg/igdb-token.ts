import axios from 'axios';

export async function getIGDBAccessToken(): Promise<string | null> {
  try {
    console.log('Attempting to get token with:', {
      clientId: import.meta.env.VITE_IGDB_CLIENT_ID,
      clientSecretLength: import.meta.env.VITE_IGDB_CLIENT_SECRET?.length
    });

    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id: import.meta.env.VITE_IGDB_CLIENT_ID,
          client_secret: import.meta.env.VITE_IGDB_CLIENT_SECRET,
          grant_type: 'client_credentials'
        },
        // Add more detailed error tracking
        validateStatus: function (status) {
          return status >= 200 && status < 300; // Default
        }
      }
    );

    console.log('Full Token Response:', {
      status: response.status,
      data: response.data
    });

    if (!response.data.access_token) {
      console.error('No access token in response');
      return null;
    }

    return response.data.access_token;
  } catch (error) {
    // Comprehensive error logging
    if (axios.isAxiosError(error)) {
      console.error('Detailed Axios Error in Token Retrieval:', {
        message: error.message,
        code: error.code,
        status: error.response?.status,
        statusText: error.response?.statusText,
        headers: error.response?.headers,
        data: error.response?.data
      });
    } else {
      console.error('Unexpected Error in Token Retrieval:', error);
    }

    return null;
  }
}