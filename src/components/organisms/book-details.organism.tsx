import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { BookmarkButton } from "@/components/atoms/bookmark-button";
import { Card } from "@/components/molecules/card.molecule";
import { BookModel, BookStatus } from "@/models/book.model";
import { cn } from "@/lib/utils";
import useBook from "@/hooks/useBook.hook";

interface BookDetailsProps {
	fetching: boolean;
}

const BookDetails: React.FC<BookDetailsProps> = ({
	fetching
}) => {
	const [collapseDescription, setCollapseDescription] = useState(true);
	const { book, setBook} = useBook();

	if(!book) return;

	const onBookmarkedBook = (variant: BookStatus) => {
		setBook({...book, status: variant});
	}

	if(fetching) {
		return (
			<View>
				<Text className="text-md text-gray-700">Carregando...</Text>
			</View>
		)
	}

  return (
		<Card className={cn('w-full h-full mb-2 mt-2 rounded-2xl mx-0 items-center')}>
			<Card.Content className="w-full">
				{book.imageUrl && <Image source={{uri: book.imageUrl }} className={cn('object-contain w-auto h-80')}/>}
			</Card.Content>
			<Card.Header className="w-full">
				<Card.Title className="text-ellipsis line-clamp-1">{book.title}</Card.Title>
				{book.subtitle && ( 
					<Card.Title className="text-ellipsis line-clamp-2 text-lg font-medium mb-2">{book.subtitle}</Card.Title>
				)}
				<Card.Description 
					className={`w-full text-ellipsis ${collapseDescription ? 'line-clamp-2': 'line-clamp-none'}`}>
						{book.description}
				</Card.Description>
				<TouchableOpacity onPress={() => setCollapseDescription(!collapseDescription)}>
					<Text 
						className="text-md text-gray-800 w-full font-bold">
							{collapseDescription 
								? `expandir descrição···` 
								: `recolher descrição ···`}

					</Text>
				</TouchableOpacity>
			</Card.Header>
			<Card.Footer className="flex-col gap-1 items-start flex-wrap">
				<Text className="text-sm text-gray-800 w-full">
					{book.publishedDate} · {book.publisher}
					{'\n'}Idioma: {book.language} 
					{book.pageCount > 0 && `\nPáginas: ${book.pageCount}`}
					{book.categories && `\nCategorias: ${book.categories?.join(', ')}`}	
				</Text>
				<Text className="text-sm text-gray-800 w-full">{book.author}</Text>
			</Card.Footer>

			<View className="flex-row gap-2 justify-around w-[280px]">
				<BookmarkButton 
					variant="readed" 
					fill={book.status === 'readed'} 
					onPress={() => onBookmarkedBook('readed')}
				/>
				<BookmarkButton 
					variant='reading'
					fill={book.status === 'reading'}
					onPress={() => onBookmarkedBook('reading')}
				/>
				<BookmarkButton 
					variant='not-readed'
					fill={book.status === 'not-readed'}
					onPress={() => onBookmarkedBook('not-readed')}
				/>
				<BookmarkButton 
					variant="abandoned"
					fill={book.status === 'abandoned'}
					onPress={() => onBookmarkedBook('abandoned')}
				/>
			</View>
		</Card>
  )
}

export { BookDetails };