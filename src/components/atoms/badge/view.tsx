import { View, Text, TouchableOpacity } from "react-native";
import { BadgeAtomViewProps } from "./interface";
import { cn } from "@/lib/utils";

const BadgeAtomView: React.FC<BadgeAtomViewProps> = ({ text, Icon, color, onPress }) => {
	return (
		<View className="box-border">
			<TouchableOpacity className={cn(`${color.background} flex flex-row p-3 gap-2 rounded-full min-w-32 max-w-40`)} activeOpacity={0.8} onPress={onPress}>
				{Icon}
				<Text className={cn(`${color.text} inline-block w-fit`)}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}

export { BadgeAtomView }