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
		handleReadingRegister,
		handleEnableReadingRegister,
		handleEnableStatusChange,
		handleStatusChange,
		isChangingStatus,
		hasImageRenderError,
		setHasImageRenderError,
		isRegisteringReading,
		notes
	} = useBookDetails(book.status);

	const methods = {
		book,
		onSubmit,
		inputValue,
		hasImageRenderError,
		setInputValue,
		handleReadingRegister,
		handleEnableReadingRegister,
		handleEnableStatusChange,
		handleStatusChange,
		isChangingStatus,
		setHasImageRenderError,
		isRegisteringReading,
		notes
	}

	return <BookDetailsMoleculeView {...methods}/>
}

export { BookDetailsMolecule };