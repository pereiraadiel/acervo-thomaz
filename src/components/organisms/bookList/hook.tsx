import { BookModel } from "@/models/book.model"
import { useNavigation } from "@react-navigation/native"
import useBook from "@/hooks/useBook.hook"

const useBookListOrganism = (initialBooks: BookModel[] = []) => {
	const { navigate } = useNavigation<any>()

	const {  getById } = useBook()

	const onBookPress = (id: string) => {
		getById(id); // colocar o livro no contexto
		navigate("BookDetails") // navegar para a tela de detalhes
	}

	return {
		onBookPress
	}
}

export { useBookListOrganism };