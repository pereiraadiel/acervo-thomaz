const toastVariants = {
  default: "bg-gray-800 text-white",
  success: "bg-green-500 text-white",
  destructive: "bg-destructive",
  error: "bg-red-500 text-white",
  info: "bg-blue-500",
};

type ToastVariant = keyof typeof toastVariants;

type ToastModel = {
  id: number;
  text: string;
  variant: ToastVariant;
  duration?: number;
  position?: "top" | "bottom";
  showProgress?: boolean;
};

export { toastVariants, ToastVariant, ToastModel };
