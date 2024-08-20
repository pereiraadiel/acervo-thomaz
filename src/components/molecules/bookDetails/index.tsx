import { useBookDetails } from "./hook";
import { BookDetailsMoleculeProps } from "./interface";
import { BookDetailsMoleculeView } from "./view";

const BookDetailsMolecule: React.FC<BookDetailsMoleculeProps> = ({
	book
}) => {

	const { 
		onSubmit,
		inputValue,
		setInputValue,
		notes
	} = useBookDetails();

	const methods = {
		book,
		onSubmit,
		inputValue,
		setInputValue,
		notes
	}

	return <BookDetailsMoleculeView {...methods}/>
}

export { BookDetailsMolecule };