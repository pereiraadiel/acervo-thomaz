import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

interface ScannerButtonProps {
	onPress: () => void;
}

const ScannerButton: React.FC<ScannerButtonProps> = ({ onPress }) => {
	return (
		<View className='flex-col items-center justify-center h-full'>
			<TouchableOpacity onPress={onPress} className='flex-col items-center h-full justify-center bg-gray-800 p-2 gap-1 rounded-md'>
				<MaterialCommunityIcons name="line-scan" color={colors.green[400]} size={24} />
				<Text className='text-green-400'>Escanear</Text>
			</TouchableOpacity>
		</View>
	)
}

export { ScannerButton };