import { Text, View } from "react-native";
import { cn } from "@/lib/utils";
import { LogoAtomViewProps } from "./interface";

const LogoAtomView: React.FC<LogoAtomViewProps> = ({className, variant, color}) => {
	return (
		<View className={cn(`flex items-center justify-center ${className}`)}>
			{variant === 'small' ? (
				<Text className={`text-3xl font-bold ${color.bottom} font-lemon uppercase leading-extra-loose`}>Thz</Text>
			): (
				<>
					<Text className={`text-2xl font-regular ${color.top} font-lexend lowercase leading-extra-loose`}>Acervo</Text>
					<Text className={`text-3xl font-bold ${color.bottom} font-lemon uppercase leading-extra-loose`}>Thomaz</Text>
				</>
			)}
		</View>
	);
}

export { LogoAtomView };