import { useState } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setIsLoading(false);

      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error.message || "Something went wrong!");
    }
  };

  return {
    isLoading,
    error: error,
    sendRequest,
  };
};
export default useHttp;
