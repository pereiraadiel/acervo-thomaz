import { useEffect } from "react";
import { useBookListOrganism } from "./hook";
import { BookListOrganismProps } from "./interface";
import { BookListOrganismView } from "./view";

const BookListOrganism: React.FC<BookListOrganismProps> = ({
	books: initialBooks
}) => {

	const {
		books,
		setBooks
	} = useBookListOrganism();

	useEffect(() => {
		setBooks(initialBooks)
	}, [initialBooks])

	const methods = {
		books,
		onBookPress: (id: string) => { console.log('todo: navigate to book details', id)}
	}

	return <BookListOrganismView {...methods}/>
}

export { BookListOrganism };