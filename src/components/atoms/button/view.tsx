import { TouchableOpacity } from "react-native";
import { ButtonAtomViewProps } from "./interface";
import { TitleAtom } from "@/components/atoms/title";

const ButtonAtomView: React.FC<ButtonAtomViewProps> = ({ title, variant = 'filled', className, ...props}) => {
	return (
		<TouchableOpacity 
			className={`border border-orange-600 rounded-2xl p-4 flex items-center justify-center ${variant === 'filled' && 'bg-orange-600'} ${className}`} 
			activeOpacity={0.8}
			{...props}
		>
			<TitleAtom className={`${variant === 'filled' ? 'text-white': 'text-orange-600'}`}>{title}</TitleAtom>
		</TouchableOpacity>
	)
};

export { ButtonAtomView };