import { BookDetailsMoleculeProps } from "./interface";
import { BookDetailsMoleculeView } from "./view";

const BookDetailsMolecule: React.FC<BookDetailsMoleculeProps> = ({
	book
}) => {
	const methods = {
		book
	}

	return <BookDetailsMoleculeView {...methods}/>
}

export { BookDetailsMolecule };