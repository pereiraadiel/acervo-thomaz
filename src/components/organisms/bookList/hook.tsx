import { useState } from "react"
import { BookModel } from "@/models/book.model"

const useBookListOrganism = () => {
	const [books, setBooks] = useState<BookModel[]>([])

	return {
		books,
		setBooks
	}
}

export { useBookListOrganism };