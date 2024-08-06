import { Text, TextProps } from "react-native"

const Title = (props: TextProps) => {
  return <Text className="text-white font-bold text-xl mt-2 ml-4" {...props} />
}

export { Title };