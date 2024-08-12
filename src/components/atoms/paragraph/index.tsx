import { Text, TextProps } from "react-native"
import { cn } from "@/lib/utils";

const ParagraphAtom = ({className, ...props}: TextProps) => {
  return <Text className={cn("text-gray-800 font-light text-md")} {...props} />
}

export { ParagraphAtom };