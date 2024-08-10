import { Text, TextInput, View } from "react-native"

import { cn } from '@/lib/utils'
import { colors } from "@/styles/colors"
import { InputAtomViewProps } from "./interface"
import { forwardRef } from "react"

const InputAtomView = forwardRef<React.ElementRef<typeof TextInput>, InputAtomViewProps>(({
  className,
  label,
  Icon,
  color,
  error,
  ...props
}, ref) => {
  return (
    <View className={cn(`flex flex-col gap-1 rounded-lg text-white bg-gray-800 border ${color.border}`, className)}>
      <View className={cn('flex flex-row gap-1.5 pl-1.5 py-0.5 items-center')}>
        {Icon}
        <Text
          className={cn(`${color.text} text-base font-bold`)}
        >
          {label}
        </Text>
      </View>

      <TextInput
        placeholderTextColor={colors.gray[400]}
        className={cn(
          "pb-1 px-4 text-white bg-transparent rounded-lg"
        )}
        {...props}
      />
      {error && (
        <Text className={cn('text-red-500 text-xs pl-1.5')}>{error}</Text>
      )}
    </View>
  )
});

export { InputAtomView }
