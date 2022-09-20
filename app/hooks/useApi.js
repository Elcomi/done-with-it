import { useState } from "react";

export default useApi = apiFunction => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    request();
  }, 30000);

  const request = async () => {
    setLoading(true);

    const response = await apiFunction(...args);
    setLoading(false);

    if (!response.ok) setError(true);

    setData(response.data);
  };

  return { request, data, error, loading };
};
