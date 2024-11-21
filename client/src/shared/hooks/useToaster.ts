import { toast, ToastPosition } from "react-toastify";

export function useToaster() {
  const toaster = (
    type: "success" | "error" | "info" | "warning",
    message: string,
    position: ToastPosition = "bottom-right",
    time: number = 5000
  ) => {
    toast(message, {
      type,
      position,
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return { toaster };
}
