import { Text, TextProps } from "react-native"
import { cn } from "@/lib/utils";

const TitleAtom = ({className, ...props}: TextProps) => {
  return <Text className={cn("text-white font-bold text-xl", className)} {...props} />
}

export { TitleAtom };