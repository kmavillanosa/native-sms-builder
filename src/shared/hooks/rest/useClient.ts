import axios from "axios";

const useClient = (baseUrl: string) => {
  const client = axios.create({
    baseURL: baseUrl,
  });
  return client;
};

export default useClient;
