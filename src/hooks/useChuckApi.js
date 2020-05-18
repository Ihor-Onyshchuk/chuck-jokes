import {useState} from 'react';
import {getJokes} from '../api';

export const useChuckApi = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(url) {
    setIsError(false);
    setIsLoading(true);

    try {
      const {data} = await getJokes(url);
      let result = {total: 0, result: []};
      if (typeof data === 'object') {
        result = data.hasOwnProperty('total')
          ? data
          : {total: 1, result: [data]};
      }
      setData(result);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }
  return [{isLoading, data, isError}, fetchData];
};
