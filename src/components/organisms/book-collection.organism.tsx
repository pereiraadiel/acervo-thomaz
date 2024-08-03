import { Image, ScrollView, Text } from "react-native";
import { Card } from "../molecules/card.molecule";
import { cn } from "../../lib/utils";
import { Title } from "../atoms/title.atom";
import { Paragraph } from "../atoms/paragraph.atom";
import { BookCard } from "./book-card.organism";

interface BookCollectionProps {
	books: {
		title: string;
		description: string;
		imageUrl: string;
		author: string;
	}[];
	title: string;
	description: string;
}

const BookCollection: React.FC<BookCollectionProps> = ({
	title,
	description,
	books
}) => {
  return (
		<>
			<Title>{title}</Title>
			<Paragraph>{description}</Paragraph>
			<ScrollView horizontal className="pb-2">
				{books.map((book, index) => (
					<BookCard
						key={index}
						title={book.title}
						description={book.description}
						author={book.author}
						imageUrl={book.imageUrl}
					/>
				))}
			</ScrollView>
		</>
  )
}

export { BookCollection };