import { useEffect, useState } from 'react';

const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(endPoint, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          let newData = data;
          if (Array.isArray(newData)) {
            newData = data.slice(0, 50);
          }
          setData(newData);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => {
      abortCont.abort();
    };
  }, [endPoint]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
