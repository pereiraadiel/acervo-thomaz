import { View } from 'react-native';
import { BookScanInterface } from './interface';
import { MainTemplate } from "@/components/templates/main.template";
import { CameraMolecule } from '@/components/molecules/camera.molecule';
import { ScannerButton } from '@/components/atoms/scanner-button.atom';
import { TabsMolecule } from '@/components/molecules/tabs';
import { SearchMolecule } from '@/components/molecules/search';
import { BookListOrganism } from '@/components/organisms/bookList';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import useBooks from '@/hooks/useBooks.hook';

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


	const { allBooks } = useBooks()

	const [books, setBooks] = useState(allBooks);

	const handleSearch = (term: string) => {
		setBooks(allBooks.filter(book => book.title.toLowerCase().includes(term.toLowerCase())))
	}

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
		// scanBarcodeComponent = <BookDetails {...book} fetching={fetching}/>;
		scanBarcodeComponent = <></>;
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
							<>
								<SearchMolecule
									placeholder='Pesquisar autor, título da obra'
									onSearch={handleSearch}
									onPressIn={dismissCamera}
								/>
								<BookListOrganism books={books}/>
								
							</>
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
