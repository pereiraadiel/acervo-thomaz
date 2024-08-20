import { useBookListOrganism } from "./hook";
import { BookListOrganismProps } from "./interface";
import { BookListOrganismView } from "./view";

const BookListOrganism: React.FC<BookListOrganismProps> = ({
	books,
}) => {

	const {
		onBookPress,
	} = useBookListOrganism();

	const methods = {
		books,
		onBookPress,
	}

	return <BookListOrganismView {...methods}/>
}

export { BookListOrganism };