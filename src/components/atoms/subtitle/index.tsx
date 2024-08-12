import { Text, TextProps } from "react-native"
import { cn } from "@/lib/utils";

const SubtitleAtom = ({className, ...props}: TextProps) => {
  return <Text className={cn("text-white font-semibold text-md", className)} {...props} />
}

export { SubtitleAtom };