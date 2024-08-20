import useCameraPermissions from '@/hooks/useCameraPermission.hook'
import useBook from '@/hooks/useBook.hook';
import useBarCode from '@/hooks/useBarCode.hook';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

const useBookScanner = () => {
	const camera = useCameraPermissions();
	const scan = useBook();
	const barcode = useBarCode();
	const { navigate } = useNavigation<any>();

	useFocusEffect(useCallback(() => {
		if(barcode.scanned) navigate('BookDetails');

		return () => {
			camera.requestCamera();
			barcode.setScanned(false);
		}
	}, [barcode.scanned]));

	return {
		camera,
		scan,
		barcode
	}
}



export { useBookScanner };