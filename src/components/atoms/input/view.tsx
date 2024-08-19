import { TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { InputAtomViewProps } from "./interface";
import { colors } from "@/styles/colors";

const InputAtomView: React.FC<InputAtomViewProps> = ({
	type,
	className,
	...props
}) => {

	return (
		<View className="relative">
			<TextInput 
				multiline={type === "multiline"}
				className={`w-full p-2 bg-gray-500 rounded-lg ${type === 'multiline' && 'min-h-24'} text-white ${className}`}
				placeholderTextColor={colors.gray[800]}
				{...props}
			/>
			<AntDesign 
				name={type === 'search' ? 'search1' : 'edit'}
				size={24} 
				color={colors.gray[900]} 
				className="absolute right-4 top-6"
			/>
		</View>
	)
}

export { InputAtomView };