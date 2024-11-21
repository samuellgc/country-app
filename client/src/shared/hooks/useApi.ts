import axios from "axios";

export function useApi() {
  const apiUri = process.env.NEXT_PUBLIC_API_URL;

  const api = axios.create({
    baseURL: apiUri,
  });

  return { api };
}
