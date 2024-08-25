import { useBookMolecule } from "./hook";
import { BookMoleculeProps } from "./interface";
import { BookMoleculeView } from "./view";

const BookMolecule: React.FC<BookMoleculeProps> = ({
	book,
	onPress,
}) => {
	const { setBook, hasImageRenderError, setHasImageRenderError } = useBookMolecule();

	const methods = {
		book,
		hasImageRenderError,
		setBook,
		setHasImageRenderError,
		onPress,
	}

	// if(!book) return <LoadingAtom/>

	return <BookMoleculeView {...methods}/>
}

export { BookMolecule };