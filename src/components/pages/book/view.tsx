import { BookDetailsMolecule } from "@/components/molecules/bookDetails";
import { MainTemplate } from "@/components/templates/main.template";
import { BookPageViewProps } from "./interface";

const BookPageView: React.FC<BookPageViewProps> = ({
	book, 
	fetching
}) => {
	return (
		<MainTemplate headerTitle={ fetching ? 'Carregando...': book.title} headerSubtitle={fetching ? 'Carregando...': book.subtitle} headerVariant="with-back"  >
			<BookDetailsMolecule
				book={book}
			/>
		</MainTemplate>
	)
}

export { BookPageView };