import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/refresh-token', {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
        email: response.data.email,
        name: response.data.name,
        phone: response.data.phone,
        urlPhoto: response.data.urlPhoto,
        id: response.data.id,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
