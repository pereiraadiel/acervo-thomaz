import useCameraPermissions from '@/hooks/useCameraPermission.hook'
import useBook from '@/hooks/useBook.hook';
import useBarCode from '@/hooks/useBarCode.hook';

const useBookScanner = () => {
	const camera = useCameraPermissions();
	const scan = useBook();
	const barcode = useBarCode();

	return {
		camera,
		scan,
		barcode
	}
}



export { useBookScanner };