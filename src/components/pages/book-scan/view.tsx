import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { CameraView } from "expo-camera/next"
import { MainTemplate } from "@/components/templates/main.template"
import { Title } from "@/components/atoms/title.atom"
import { Paragraph } from "@/components/atoms/paragraph.atom"
import { InputAtom } from '@/components/atoms/input.atom'
import { BookScanInterface } from './interface'
import { colors } from '../../../styles/colors'

const BookScanView: React.FC<BookScanInterface> = ({
	camera: { 
		hasCameraPermission,
		isCameraOpened,
		requestCamera,
		dismissCamera
	},
	barcode: {
		onScan,
		result,
		scanned,
		setScanned
	},
	book: {
		book
	}
}) => {
	
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
			{isCameraOpened ? (
				<View className={`w-full mt-2 h-64 border ${scanned ? 'border-green-400': 'border-red-400'}`}>
					<CameraView
						onBarcodeScanned={scanned ? undefined : (r) => {onScan(r); dismissCamera()}}
						style={StyleSheet.absoluteFillObject}
						barcodeScannerSettings={{
							barcodeTypes: ["ean13", "ean8"],
						}}
					/>
				</View>
			):
			(
			<View className='py-2 w-full flex-row items-center justify-center'>
				<TouchableOpacity onPress={() => {setScanned(false); requestCamera()}} className='flex-row items-center justify-center bg-gray-600 p-2 gap-1 rounded-md'>
					<MaterialCommunityIcons name="line-scan" color={colors.green[400]} size={24} />
					<Text className='text-green-400'>Escanear</Text>
				</TouchableOpacity>
			</View>
			)}
			{scanned ? (
        <View className='mt-2'>
          <Title>Código Escaneado:</Title>
          <Title>Tipo: {result?.type}</Title>
          <Title>Valor: {result?.data}</Title>
					{book && <Paragraph>{JSON.stringify(book)}</Paragraph>}
        </View>
      ): 
			(
				<View className='mt-2'>
					<InputAtom 
						label='Pesquisar' 
						placeholder='Pesquisar por nome do autor, ou titulo da obra' 
						onPressIn={() => dismissCamera()}/>
				</View>
			)
		}
		</MainTemplate>
	)
}

export { BookScanView }