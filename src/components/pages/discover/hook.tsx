import { useEffect, useState } from "react";
import { BookModel } from "@/models/book.model";
import useSearchBooks from "@/hooks/useSeachBooks.hook";

const useDiscoverPage = () => {
	const [searchText, setSearchText] = useState<string>('');
	const [books, setBooks] = useState<BookModel[]>([]);
	
	const {
		books: fetchedBooks,
		loading,
		error,
		searchBooks
	} = useSearchBooks();

	if(error)	console.error('error', error);

	useEffect(() => {
		const fetchData = async () => {
			searchBooks(searchText);
		}

		if(searchText.length > 3) fetchData();
		else setBooks([])
	}, [searchText])


	useEffect(() => {	
		setBooks(fetchedBooks);
	}, [fetchedBooks]);

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

export { useDiscoverPage }