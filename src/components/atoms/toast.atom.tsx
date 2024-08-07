import React, { useEffect, useRef } from "react"
import { Animated, Text, View } from "react-native"
import { cn } from "@/lib/utils"
import { ToastModel, toastVariants } from "@/models/toast.model"
import useToastViewModel, { ToastViewModelProps } from "@/hooks/useToastViewModel.hook"

interface ToastProps extends ToastModel {
  onHide: (id: number) => void
}

const Toast: React.FC<ToastProps> = ({
  id,
  text,
  variant = "default",
  duration = 3000,
  showProgress = true,
  onHide,
}) =>  {
  const opacity = useRef(new Animated.Value(0)).current
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 1,
        duration: duration - 1000,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => onHide(id))
  }, [duration])

  return (
    <Animated.View
      className={`
        ${toastVariants[variant]}
        m-2 mb-1 p-4 rounded-lg transform transition-all
      `}
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
      }}
    >
      <Text className="font-bold text-base text-left text-black">
        {text}
      </Text>
      {showProgress && (
        <View className="mt-2 rounded">
          <Animated.View
            className="bg-green-800 dark:bg-black h-2 opacity-30 rounded"
            style={{
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            }}
          />
        </View>
      )}
    </Animated.View>
  )
}


export { Toast }
