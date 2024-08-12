import { useBookMolecule } from "./hook";
import { BookMoleculeProps } from "./interface";
import { BookMoleculeView } from "./view";

const BookMolecule: React.FC<BookMoleculeProps> = ({
	book,
	onPressIn,
}) => {
	const { setBook } = useBookMolecule();

	const methods = {
		book,
		setBook,
		onPressIn,
	}

	// if(!book) return <LoadingAtom/>

	return <BookMoleculeView {...methods}/>
}

export { BookMolecule };