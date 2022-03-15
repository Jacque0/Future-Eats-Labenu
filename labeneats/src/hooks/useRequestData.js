import { useState } from "react";

export const useRequestData = (initialData, url) => {
  let [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    axios
      .get(url)
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
