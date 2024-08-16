import { Image, Text, View } from "react-native";
import { cn } from "@/lib/utils";
import { LogoAtomViewProps } from "./interface";

const LogoAtomView: React.FC<LogoAtomViewProps> = ({className, variant, color}) => {
	return (
		<View className={cn(`flex items-center justify-center ${className}`)}>
			{variant === 'small' ? (
				<Image source={require('@/assets/logo-small.png')} style={{width: 100, height: 100}} />
			): (
				<>
					<Image source={require('@/assets/logo.png')} style={{width: 120, height:48}}/>
				</>
			)}
		</View>
	);
}

export { LogoAtomView };