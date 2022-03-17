import { useState, useEffect } from "react";
import axios from "axios"

export const useRequestData = (initialData, url) => {
  let [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get(url, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return {data, error, loading};
};
