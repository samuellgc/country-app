import { AxiosError } from "axios";
import { ResponseDataError } from "@/shared/types";

export function handleAxiosError(e: unknown) {
  const error = e as AxiosError;
  const responseData = error.response?.data as ResponseDataError;
  return responseData;
}
