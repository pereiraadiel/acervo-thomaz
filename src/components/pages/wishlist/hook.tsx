import useBooks from "@/hooks/useBooks.hook";
import { useState } from "react";

const useWishlistPage = () => {
	const { desiredBooks } = useBooks();
	const [books, setBooks] = useState(desiredBooks);

	const onSearch = (text: string) => {
		if(text === '') return setBooks(desiredBooks);
		const filteredBooks = desiredBooks
			.filter(book => {
				if(book.title.toLowerCase().includes(text.toLowerCase())) return true;
				if(book.author.toLowerCase().includes(text.toLowerCase())) return true;
			});
		setBooks(filteredBooks);
	}

	return {
		books,
		onSearch
	}
}

export { useWishlistPage };