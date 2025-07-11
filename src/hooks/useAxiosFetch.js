// src/hooks/useAxiosFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;  // avoid state update if component is unmounted
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(dataUrl, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      source.cancel();  // cancel request on component unmount
    };
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
