import { useState, useEffect } from "react";
import API from "../services/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true; // To avoid setting state on unmounted component
    const fetchData = async () => {
      try {
        const response = await API.get(endpoint);
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
