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
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFxQUVJc1RxVzhkS3ZuaGZIcmhDIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDcyNjgzODB9.e56IT7qpgvMsKEBwFHHA6QNP_s94_eNuj5I8HoqeBI4"
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
