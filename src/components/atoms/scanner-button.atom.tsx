import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

interface ScannerButtonProps {
	onPress: () => void;
}

const ScannerButton: React.FC<ScannerButtonProps> = ({ onPress }) => {
	return (
		<View className='py-2 mx-2 flex-col items-center justify-center'>
			<TouchableOpacity onPress={onPress} className='flex-col items-center justify-center bg-gray-600 p-2 gap-1 rounded-md'>
				<MaterialCommunityIcons name="line-scan" color={colors.green[400]} size={24} />
				<Text className='text-green-400'>Escanear</Text>
			</TouchableOpacity>
		</View>
	)
}

export { ScannerButton };