import { BookScanView } from "./view";
import useCameraPermissions from "@/hooks/useCameraPermission.hook"
import useBarCode from "@/hooks/useBarCode.hook";
import useBook from "@/hooks/useBook.hook";

const BookScanPage = () =>{
	const methods = {
		camera: useCameraPermissions(),
		barcode: useBarCode(),
		book: useBook()
	}

	return <BookScanView {...methods}/>;
}

export { BookScanPage }