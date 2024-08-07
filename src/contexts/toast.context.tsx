import { createContext } from "react"
import { View } from "react-native"
import useToastViewModel, { ToastViewModelProps } from "@/hooks/useToastViewModel.hook"
import { Toast } from "@/components/atoms/toast.atom"
import { cn } from "@/lib/utils"

interface ToastProviderProps {
  children: React.ReactNode
  position?: "top" | "bottom"
}

const ToastContext = createContext<ToastViewModelProps | undefined>(undefined)

function ToastProvider({ children, position = "top" }: ToastProviderProps) {
  const toastViewModel = useToastViewModel()

  return (
    <ToastContext.Provider value={toastViewModel}>
      {children}
      <View
        className={cn("absolute left-0 right-0", {
          "top-[45px]": position === "top",
          "bottom-0": position === "bottom",
        })}
      >
        {toastViewModel.messages.map((message) => (
          <Toast
            key={message.id}
            {...message}
            onHide={toastViewModel.removeToast}
          />
        ))}
      </View>
    </ToastContext.Provider>
  )
}

export { ToastProvider, ToastContext }