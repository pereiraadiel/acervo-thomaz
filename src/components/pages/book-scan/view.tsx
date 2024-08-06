import useCameraPermissions from "@/hooks/useCameraPermission.hook"
import { MainTemplate } from "@/components/templates/main.template"
import { CameraView, BarcodeScanningResult } from "expo-camera/next"
import { useState } from "react"
import { Title } from "@/components/atoms/title.atom"
import {Button, StyleSheet, View} from 'react-native'

const BookScanView: React.FC<ReturnType<typeof useCameraPermissions>> = ({
	hasCameraPermission
}) => {
	const handleBarCodeScanned = ({type, data}: BarcodeScanningResult ) => {
		setScanResult({type, data});
		console.log(type, data)
		setScanned(true)
	}
	const [scanResult, setScanResult] = useState<{type: string, data: string} | null>(null);
	const [scanned, setScanned] = useState(false);
	
	if (hasCameraPermission === null) {
    return (
			<MainTemplate>
				<Title>Por favor permita o acesso a sua câmera</Title>
			</MainTemplate>
		)
  }
  if (hasCameraPermission === false) {
    return (
			<MainTemplate>
				<Title>sem acesso a câmera</Title>
			</MainTemplate>
		)
  }

	return (
		<MainTemplate>
			<View className="w-full h-64 border border-red-400">
				<CameraView
					onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={StyleSheet.absoluteFillObject}
					barcodeScannerSettings={{
						barcodeTypes: ["ean13", "ean8"],
					}}
				/>
			</View>
			{scanned && (
        <View>
          <Title>Código Escaneado:</Title>
          <Title>Tipo: {scanResult?.type}</Title>
          <Title>Valor: {scanResult?.data}</Title>
          <Button title="Escanear Novamente" onPress={() => setScanned(false)} />
        </View>
      )}
		</MainTemplate>
	)
}

export { BookScanView }