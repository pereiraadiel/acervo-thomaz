import { CameraView } from "expo-camera/next";
import { View, StyleSheet } from "react-native";

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
	return (
		<View className={`w-full mt-2 h-64 border ${scanned ? 'border-green-400': 'border-blue-400'}`}>
			<CameraView
				onBarcodeScanned={scanned ? undefined : ({type, data}) => {onScan({type, data}); dismissCamera();}}
				style={StyleSheet.absoluteFillObject}
				barcodeScannerSettings={{
					barcodeTypes: ["ean13", "ean8"],
				}}
			/>
		</View>
	)
}

export { CameraMolecule };