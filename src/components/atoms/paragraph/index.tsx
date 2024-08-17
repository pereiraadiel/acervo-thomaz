import { Text, TextProps } from "react-native"
import { cn } from "@/lib/utils";

const ParagraphAtom = ({className, ...props}: TextProps) => {
  return <Text className={cn("text-gray-900 font-light text-md", className)} {...props} />
}

export { ParagraphAtom };