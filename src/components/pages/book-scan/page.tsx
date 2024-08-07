import { BookScanView } from "./view";
import useCameraPermissions from "@/hooks/useCameraPermission.hook"
import useBarCode from "@/hooks/useBarCode.hook";
import useExternalBook from "@/hooks/useExternalBook.hook";

const BookScanPage = () =>{
	const methods = {
		camera: useCameraPermissions(),
		barcode: useBarCode(),
		book: useExternalBook()
	}

	return <BookScanView {...methods}/>;
}

export { BookScanPage }