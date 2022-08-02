import { useCallback, useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setUserInfo(data);
  });

  useEffect(() => {
    getUserInfo();
  }, [url, getUserInfo]);

  return { isLoading, userInfo };
};
