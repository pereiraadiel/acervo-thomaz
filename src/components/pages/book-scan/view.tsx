import { View } from 'react-native';
import { BookScanInterface } from './interface';
import { MainTemplate } from "@/components/templates/main.template";
import { InputAtom } from '@/components/atoms/input';
import { CameraMolecule } from '@/components/molecules/camera.molecule';
import { ScannerButton } from '@/components/atoms/scanner-button.atom';
import { BookDetails } from '@/components/organisms/book-details.organism';
import { TabsMolecule } from '@/components/molecules/tabs';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

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
		book,
		fetching
	}
}) => {

	useFocusEffect(useCallback(() => {
		setScanned(false);
		dismissCamera();
	}, []));
	let scanBarcodeComponent: React.ReactNode;

	if (!hasCameraPermission) {
		scanBarcodeComponent = <ScannerButton onPress={requestCamera}/>;
	} else if (isCameraOpened && !scanned) {
		scanBarcodeComponent = (
			<CameraMolecule
				scanned={scanned}
				onScan={onScan} 
				dismissCamera={dismissCamera}
			/>
		);
	} else if (scanned && book) {
		scanBarcodeComponent = <BookDetails {...book} fetching={fetching}/>;
	} else {
		scanBarcodeComponent = (
			<ScannerButton 
				onPress={() => {
					requestCamera(); 
					setScanned(false);
				}} 
			/>
		);
	}

	return (
		<MainTemplate>
			<TabsMolecule
				initialTab={'search'}
				tabs={[
					{
						name: 'search', 
						component: (
							<InputAtom 
								label='Pesquisar' 
								placeholder='Pesquisar autor, título da obra'
								variant='search'
								onPressIn={dismissCamera}
								className='w-auto flex-1'
							/>
						)
					},
					{
						name: 'scan-barcode', 
						component: (
							<View className='flex-1'>
								{scanBarcodeComponent}
							</View>
						)
					}
				]}
			/>
		</MainTemplate>
	);
}

export { BookScanView };
