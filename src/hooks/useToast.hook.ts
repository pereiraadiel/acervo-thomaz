import { useContext } from "react";
import { ToastContext } from "@/contexts/toast.context";

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export default useToast;
