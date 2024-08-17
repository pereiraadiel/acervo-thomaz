import { BookModel } from "@/models/book.model";

const useBookDetails = (book: BookModel) => {
	return {
		book
	}
}

export { useBookDetails };