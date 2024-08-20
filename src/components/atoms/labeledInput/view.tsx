import { Text, TextInput, View } from "react-native"
import { cn } from '@/lib/utils'
import { colors } from "@/styles/colors"
import { LabeledInputAtomViewProps } from "./interface"
import { forwardRef } from "react"

const LabeledInputAtomView = forwardRef<React.ElementRef<typeof TextInput>, LabeledInputAtomViewProps>(({
  className,
  label,
  Icon,
  color,
  keyboardType,
  variant,
  error,
  onFocus,
  ...props
}, ref) => {
  

  return (
    <View className={cn(`flex flex-col gap-1 rounded-lg text-white border ${color.border}`, className)}
      onTouchStart={onFocus}
    >
      <View className={cn('flex flex-row gap-1.5 pl-1.5 py-0.5 items-center')}>
        {Icon}
        <Text
          className={cn(`${color.text} text-base font-bold`)}
        >
          {label}
        </Text>
        {error && (
          <Text className={cn('text-red-500 text-xs pl-1.5 flex-1')}>{error}</Text>
        )}
      </View>

      <TextInput
        placeholderTextColor={colors.gray[800]}
        className={cn(
          "pb-1 px-4 text-white bg-transparent rounded-lg"
        )}
        keyboardType={keyboardType}
        secureTextEntry={variant === 'password'}
        ref={ref}
        {...props}
      />
    </View>
  )
});

export { LabeledInputAtomView }
