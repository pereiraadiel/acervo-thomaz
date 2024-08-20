import { useBookMolecule } from "./hook";
import { BookMoleculeProps } from "./interface";
import { BookMoleculeView } from "./view";

const BookMolecule: React.FC<BookMoleculeProps> = ({
	book,
	onPress,
}) => {
	const { setBook } = useBookMolecule();

	const methods = {
		book,
		setBook,
		onPress,
	}

	// if(!book) return <LoadingAtom/>

	return <BookMoleculeView {...methods}/>
}

export { BookMolecule };