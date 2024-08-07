import { View } from 'react-native';
import { MainTemplate } from "@/components/templates/main.template";
import { Title } from "@/components/atoms/title.atom";
import { Paragraph } from "@/components/atoms/paragraph.atom";
import { Input } from '@/components/atoms/input.atom';
import { CameraMolecule } from '@/components/molecules/camera.molecule';
import { BookScanInterface } from './interface';
import { ScannerButton } from '@/components/atoms/scanner-button.atom';

const BookScanView: React.FC<BookScanInterface> = ({
	camera: { 
		hasCameraPermission,
		isCameraOpened,
		requestCamera,
		dismissCamera,
		canAskAgain
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
	if (!hasCameraPermission) {
		return (
			<MainTemplate>
				<View className='mt-2'>
					<Input 
						label='Pesquisar' 
						placeholder='Pesquisar por nome do autor, ou titulo da obra' 
						onPressIn={dismissCamera}
					/>
				</View>
			</MainTemplate>
		);
	}

	return (
		<MainTemplate>
			{isCameraOpened ? (
				<CameraMolecule
					scanned={scanned}
					onScan={onScan} 
					dismissCamera={dismissCamera}
				/>
			) : canAskAgain && (
				<ScannerButton onPress={() => {requestCamera(); setScanned(false)}} />
			)}

			{scanned ? (
				<View className='mt-2'>
					<Title>Código Escaneado:</Title>
					<Title>Tipo: {result?.type}</Title>
					<Title>Valor: {result?.data}</Title>
					{book && <Paragraph>{JSON.stringify(book)}</Paragraph>}
				</View>
			) : (
				<View className='mt-2'>
					<Input 
						label='Pesquisar' 
						placeholder='Pesquisar por nome do autor, ou titulo da obra' 
						onPressIn={dismissCamera}
					/>
				</View>
			)}
		</MainTemplate>
	);
}

export { BookScanView };
