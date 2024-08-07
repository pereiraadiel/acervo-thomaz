import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "@/components/molecules/card.molecule";
import { BookModel } from "@/models/book.model";
import { cn } from "@/lib/utils";
import { useState } from "react";

type BookDetailsProps = BookModel & {
	fetching: boolean;
}

const BookDetails: React.FC<BookDetailsProps> = ({
	fetching,
	...book
}) => {
	const [collapseDescription, setCollapseDescription] = useState(true);

	if(fetching) {
		return (
			<View>
				<Text className="text-md text-gray-400">Carregando...</Text>
			</View>
		)
	}

  return (
		<Card className={cn('w-full h-full mb-2')}>
			<Card.Content>
				{book.imageUrl && <Image source={{uri: book.imageUrl }} className={cn('object-contain w-auto h-80')}/>}
			</Card.Content>
			<Card.Header>
				<Card.Title className="text-ellipsis line-clamp-1">{book.title}</Card.Title>
				{book.subtitle && ( 
					<Card.Title className="text-ellipsis line-clamp-2 text-lg font-medium mb-2">{book.subtitle}</Card.Title>
				)}
				<Card.Description 
					className={`text-ellipsis ${collapseDescription ? 'line-clamp-2': 'line-clamp-none'}`}>
						{book.description}
				</Card.Description>
				<TouchableOpacity onPress={() => setCollapseDescription(!collapseDescription)}>
					<Text 
						className="text-md text-gray-500 w-full font-bold">
							{collapseDescription 
								? `expandir descrição···` 
								: `recolher descrição ···`}

					</Text>
				</TouchableOpacity>
			</Card.Header>
			<Card.Footer className="flex-col gap-1 items-start flex-wrap">
				<Text className="text-sm text-gray-500 w-full">
					{book.publishedDate} · {book.publisher}
					{'\n'} Idioma: {book.language} 
					{'\n'} Páginas: {book.pageCount} 
					{book.categories && `\nCategorias: ${book.categories?.join(', ')}`}	
				</Text>
				<Text className="text-sm text-gray-400 w-full">{book.author}</Text>
			</Card.Footer>
		</Card>
  )
}

export { BookDetails };