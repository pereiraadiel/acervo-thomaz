import { useEffect, useState } from "react";
import useSearchBooks from "@/hooks/useSeachBooks.hook";
import useBarCode from "@/hooks/useBarCode.hook";
import useBook from "@/hooks/useBook.hook";
import useCameraPermissions from "@/hooks/useCameraPermission.hook";

const useScanBook = () => {
	const {
		onScan,
		result,
		scanned,
	} = useBarCode();

	const {
		book,
		fetching,
		fetchBookInfoByIsbn,
	} = useBook();

	const {
		hasCameraPermission,
		requestCamera,
		dismissCamera,
		canAskAgain,
		verifyCameraPermissions
	} = useCameraPermissions()

	useEffect(() => {
		if(scanned) {
			fetchBookInfoByIsbn(result.data);
		}
	}, [scanned]);

	return {
		scannedBook: book,
		fetching,
		onScan,
		hasCameraPermission,
		requestCamera,
		dismissCamera,
		canAskAgain,
		verifyCameraPermissions
	}
}

const useFetchBook = () => {
	const [searchText, setSearchText] = useState<string>('');
	
	const {
		books,
		loading,
		error,
		searchBooks
	} = useSearchBooks();
	
	if(error)	console.error('error', error);
	
	useEffect(() => {
		if(searchText === '') {
			searchBooks('');
			return;
		}
		if(searchText.length > 3) searchBooks(searchText);
	}, [searchText])
	
	const onSearch = (text: string) => {
		setSearchText(text);
	}
	
	return {
		books,
		searchText,
		loading,
		onSearch
	}
}

const useDiscoverPage = () => {
	const {
		scannedBook,
		fetching,
		onScan,
		verifyCameraPermissions,
		dismissCamera,
		hasCameraPermission,
		requestCamera
	} = useScanBook();

	const {
		books,
		searchText,
		loading,
		onSearch
	} = useFetchBook();

	return {
		scannedBook,
		fetching,
		onScan,
		verifyCameraPermissions,
		dismissCamera,
		hasCameraPermission,
		requestCamera,
		books,
		searchText,
		loading,
		onSearch
	}
}

export { useDiscoverPage }