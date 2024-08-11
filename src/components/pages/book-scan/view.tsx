import { View } from 'react-native';
import { BookScanInterface } from './interface';
import { MainTemplate } from "@/components/templates/main.template";
import { InputAtom } from '@/components/atoms/input';
import { CameraMolecule } from '@/components/molecules/camera.molecule';
import { ScannerButton } from '@/components/atoms/scanner-button.atom';
import { BookDetails } from '@/components/organisms/book-details.organism';

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
	if (!hasCameraPermission) {
		return (
			<MainTemplate>
				<View className='mt-2'>
					<InputAtom 
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
			{isCameraOpened && (
				<CameraMolecule
					scanned={scanned}
					onScan={onScan} 
					dismissCamera={dismissCamera}
				/>
			)}

			{scanned ? (
				book &&	<BookDetails {...book} fetching={fetching}/>
			) : (
				<View className='mt-2 flex-row items-center justify-center gap-2'>
					{(isCameraOpened === false && canAskAgain) && <ScannerButton onPress={() => {requestCamera(); setScanned(false)}} />}
					<InputAtom 
						label='Pesquisar' 
						placeholder='Pesquisar autor, titulo da obra' 
						variant='search'
						onPressIn={dismissCamera}
						className='w-auto flex-1'
					/>
				</View>
			)}
		</MainTemplate>
	);
}

export { BookScanView };
