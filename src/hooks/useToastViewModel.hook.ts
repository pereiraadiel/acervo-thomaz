import { ToastModel, ToastVariant } from "@/models/toast.model";
import { useState } from "react";

interface ToastViewModelProps {
  messages: ToastModel[];
  addToast: (
    message: string,
    variant?: ToastVariant,
    duration?: number,
    position?: "top" | "bottom",
    showProgress?: boolean
  ) => void;
  removeToast: (id: number) => void;
}

const useToastViewModel = () => {
  const [messages, setMessages] = useState<ToastModel[]>([]);

  const addToast = (
    message: string,
    variant: ToastVariant = "default",
    duration: number = 3000,
    position: "top" | "bottom" = "top",
    showProgress: boolean = true
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        variant,
        duration,
        position,
        showProgress,
      },
    ]);
  };

  const removeToast = (id: number) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  };

  return {
    messages,
    addToast,
    removeToast,
  } as ToastViewModelProps;
};

export { ToastViewModelProps };
export default useToastViewModel;
