import { View, Text, TouchableOpacity } from "react-native";
import { BadgeAtomViewProps } from "./interface";
import { cn } from "@/lib/utils";

const BadgeAtomView: React.FC<BadgeAtomViewProps> = ({ text, Icon, color, onPress, className, size = 'large' }) => {
	const width = size === 'small' ? 'max-w-24 min-w-16' : size === 'medium' ? 'max-w-32 min-w-20' : 'w-48';
	const height = size === 'small' ? 'h-8' : size === 'medium' ? 'h-10' : 'h-14';
	const textSize = size === 'small' ? 'text-[9px]' : size === 'medium' ? 'text-xs' : 'text-base';

	return (
		<View className={`flex items-center ${className} ${width} ${height}`}>
			<TouchableOpacity className={cn(`${color.background} flex flex-row items-center p-2 gap-2 rounded-full ${width} ${height}`)} activeOpacity={0.8} onPress={onPress}>
				<View className="">
					{Icon}
				</View>
				<Text className={cn(`${color.text} inline-block ${textSize}`)}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}

export { BadgeAtomView }