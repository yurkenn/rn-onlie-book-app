// create custom hook for api request with axios.

import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useApi = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          url: url,
        });
        setResponse(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {response, error, loading};
};

export default useApi;
