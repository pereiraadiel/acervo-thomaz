import { ScrollView, View } from "react-native";
import { BookListOrganismViewProps } from "./interface";
import { BookMolecule } from "@/components/molecules/book";
import { TitleAtom } from "@/components/atoms/title";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from "@/styles/colors";

const BookListOrganismView: React.FC<BookListOrganismViewProps> = ({
	books,
	onBookPress
}) => {
	return (
		<ScrollView >
			{books.length === 0 ? (
				<View className="flex justify-center items-center h-32">
					<MaterialCommunityIcons name="book-open-blank-variant" size={48} color={colors.gray[900]} className="mb-3"/>
					<TitleAtom className="text-gray-900">Nenhum livro encontrado</TitleAtom>
				</View>
			): (
				books.map(book => (
					<BookMolecule key={book.id} book={book} onPress={() => onBookPress(book.id)}/>
				))
			)}
		</ScrollView>
	)
}

export { BookListOrganismView };