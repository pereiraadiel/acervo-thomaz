import { ScrollView } from "react-native";
import { BookListOrganismViewProps } from "./interface";
import { BookMolecule } from "@/components/molecules/book";

const BookListOrganismView: React.FC<BookListOrganismViewProps> = ({
	books,
	onBookPress
}) => {
	return (
		<ScrollView>
			{books.map(book => (
				<BookMolecule key={book.id} book={book} onPressIn={() => onBookPress(book.id)}/>
			))}
		</ScrollView>
	)
}

export { BookListOrganismView };