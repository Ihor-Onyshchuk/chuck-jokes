import {useState, useEffect} from 'react';
import {getJokes} from '../components/api';

export const useChuckApi = () => {
  const [data, setData] = useState();
  const [url, setUrl] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    (async function fetchData() {
      setIsError(false);
      setIsLoading(true);

      try {
        const {data} = await getJokes(url);
        setData(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.log('error', error);
        setIsError(true);
      }

      setIsLoading(false);
    })();
  }, [url]);

  return [{isLoading, data, isError}, setUrl];
};
