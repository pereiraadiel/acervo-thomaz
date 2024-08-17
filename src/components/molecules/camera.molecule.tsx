import { CameraView } from "expo-camera/next";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet, Touchable } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CameraMoleculeProps {
	scanned: boolean;
	onScan: (result: any) => void;
	dismissCamera: () => void;
}

const CameraMolecule: React.FC<CameraMoleculeProps> = ({
	scanned,
	onScan,
	dismissCamera
}) => {
	const [flash, setFlash] = useState(false);

	return (
		<View className={`w-full mt-2 h-40 border relative ${scanned ? 'border-green-400': 'border-yellow-400'}`}>
			<CameraView
				onBarcodeScanned={scanned ? undefined : ({type, data}) => {setFlash(false); onScan({type, data});  dismissCamera();}}
				// flash={flash ? 'on': 'off'}
				// enableTorch={!scanned && flash}
				mode="picture"
				style={StyleSheet.absoluteFillObject}
				barcodeScannerSettings={{
					barcodeTypes: ["ean13", "ean8"],
				}}
			/>
			<MaterialCommunityIcons className="absolute top-3 left-32 opacity-20" name="barcode" size={120} color={'white'}/>
			{/* <TouchableOpacity className="w-28 h-28 bg-gray-600 rounded-full" onPress={() => setFlash(!flash)}>
				<MaterialCommunityIcons 
					name={flash ? 'flashlight-off': 'flashlight'}
					size={24}
					color="white"
				/>
			</TouchableOpacity> */}
		</View>
	)
}

export { CameraMolecule };