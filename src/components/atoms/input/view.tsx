import { TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { InputAtomViewProps } from "./interface";
import { colors } from "@/styles/colors";
import { ParagraphAtom } from "@/components/atoms/paragraph";

const InputAtomView: React.FC<InputAtomViewProps> = ({
	type,
	className,
	onSubmit,
	error,
	...props
}) => {

	const iconName = type === 'search' ? 'search' :  type === 'numeric' ? 'hash' : 'edit' as const;
	const borderColor = error ? 'border-red-500' : 'border-gray-800';
	const textColor = error ? 'text-red-500' : 'text-white';
	return (
		<>
			<View className="relative">
				<TextInput 
					multiline={type === "multiline"}
					keyboardType={type === "numeric" ? "numeric" : "default"}
					className={`w-full p-2 pr-12 pl-4 bg-gray-400 border-x-2 border-b-2 ${borderColor} ${textColor} rounded-2xl ${type === 'multiline' && 'min-h-16 flex items-start'} ${className}`}
					placeholderTextColor={colors.gray[800]}
					{...props}
				/>
				<Feather 
					name={iconName}
					size={24} 
					color={error ? colors.red[500] : colors.gray[900]} 
					className="absolute right-4 bottom-3"
					onPress={onSubmit}
					/>
			</View>
			{error &&<ParagraphAtom className="text-red-500">{error}</ParagraphAtom>}
		</>
	)
}

export { InputAtomView };