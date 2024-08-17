import { useBookScanner } from "./hook";
import { BookScannerProps } from "./interface";
import { BookScannerView } from "./view";

const BookScanner: React.FC<BookScannerProps> = () => {
	const methods = useBookScanner();
	
	return <BookScannerView {...methods}/>
}

export { BookScanner };