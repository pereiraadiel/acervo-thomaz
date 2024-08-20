import { BookDetailsMolecule } from "@/components/molecules/bookDetails";
import { MainTemplate } from "@/components/templates/main.template";
import { BookPageViewProps } from "./interface";

const BookPageView: React.FC<BookPageViewProps> = ({
	book
}) => {
	return (
		<MainTemplate headerTitle={book.title} headerSubtitle={book.subtitle} headerVariant="with-back"  >
			<BookDetailsMolecule
				book={book}
			/>
		</MainTemplate>
	)
}

export { BookPageView };