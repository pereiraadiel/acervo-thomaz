import { useState } from "react";
import { BookModel } from "@/models/book.model";

const useBookMolecule = () => {
	const [book, setBook] = useState<BookModel>();

	return {
		book,
		setBook
	}
}

export { useBookMolecule };