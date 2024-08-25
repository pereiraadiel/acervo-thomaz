import { View, Text, TouchableOpacity } from "react-native";
import { BadgeAtomViewProps } from "./interface";
import { cn } from "@/lib/utils";

const BadgeAtomView: React.FC<BadgeAtomViewProps> = ({ text, Icon, color, onPress, className }) => {
	return (
		<View className={`flex items-center max-w-48 min-w-36 ${className}`}>
			<TouchableOpacity className={cn(`${color.background} flex flex-row p-3 gap-2 rounded-full ${className}`)} activeOpacity={0.8} onPress={onPress}>
				<View className="pl-2">
					{Icon}
				</View>
				<Text className={cn(`${color.text} inline-block pr-2`)}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}

export { BadgeAtomView }