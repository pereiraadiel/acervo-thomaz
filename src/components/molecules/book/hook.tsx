import { useState } from "react";
import { BookModel } from "@/models/book.model";

const useBookMolecule = () => {
	const [book, setBook] = useState<BookModel>();
	const [hasImageRenderError, setHasImageRenderError] = useState(false);

	return {
		book,
		hasImageRenderError,
		setBook,
		setHasImageRenderError
	}
}

export { useBookMolecule };