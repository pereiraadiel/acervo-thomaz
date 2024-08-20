import { TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { InputAtomViewProps } from "./interface";
import { colors } from "@/styles/colors";

const InputAtomView: React.FC<InputAtomViewProps> = ({
	type,
	className,
	onSubmit,
	...props
}) => {

	return (
		<View className="relative">
			<TextInput 
				multiline={type === "multiline"}
				className={`w-[92%] p-2 pr-12 pl-4 bg-gray-400 border-x-2 border-b-2 border-gray-800 rounded-2xl ${type === 'multiline' && 'min-h-16 flex items-start'} text-white ${className}`}
				placeholderTextColor={colors.gray[800]}
				{...props}
			/>
			<Feather 
				name={type === 'search' ? 'search' : 'edit'}
				size={24} 
				color={colors.gray[900]} 
				className="absolute right-8 bottom-8"
				onPress={onSubmit}
			/>
		</View>
	)
}

export { InputAtomView };