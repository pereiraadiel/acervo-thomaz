import { BookDetailsMolecule } from "@/components/molecules/bookDetails";
import { MainTemplate } from "@/components/templates/main.template";
import { BookModel } from "../../../models/book.model";

const BookPageView = () => {
	const book: BookModel = {
		title: 'Harry Potter e a Pedra Filosofal',
		subtitle: 'Harry Potter',
		description: 'Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo.',
		author: 'J.K. Rowling',
		publisher: 'Rocco',
		publishedDate: '2000',
		categories: ['Fantasia'],
		id: '1',
		imageUrl: 'http://deusmelivro.com/wp-content/uploads/2014/11/CAPA_Harry_Potter_Pedra_Filosofal.jpg',
		language: 'Português',
		pageCount: 255,
		status: 'reading',
	}
	return (
		<MainTemplate headerTitle={book.title} headerSubtitle={book.subtitle} headerVariant="with-back"  >
			<BookDetailsMolecule
				book={book}
			/>
		</MainTemplate>
	)
}

export { BookPageView };