import { Text, TextProps } from "react-native"

const Paragraph = (props: TextProps) => {
  return <Text className="text-gray-400 font-regular text-md mb-2 ml-4" {...props} />
}

export { Paragraph };