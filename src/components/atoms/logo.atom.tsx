import { Image, View } from "react-native";
import { cn } from "../../lib/utils";

interface LogoAtomProps {
	className?: string;
}

const LogoAtom: React.FC<LogoAtomProps> = ({className}) => {
	return (
		<View className={cn(`flex items-start justify-center ${className}`)}>
			<Image 
				className="w-12 h-12 object-cover" 
				source={require('@/assets/thomaz.png')} 
				alt="Acervo" 
			/>
		</View>
	);
}

export { LogoAtom };