import { Text, TextProps } from "react-native"

const Paragraph = (props: TextProps) => {
  return <Text className="text-gray-800 font-regular text-md mb-2 ml-4" {...props} />
}

export { Paragraph };