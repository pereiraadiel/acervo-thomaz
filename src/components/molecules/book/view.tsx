import { TouchableOpacity, View, Image } from "react-native"
import { BookMoleculeViewProps } from "./interface"
import { TitleAtom } from "@/components/atoms/title"
import { SubtitleAtom } from "@/components/atoms/subtitle"
import { ParagraphAtom } from "@/components/atoms/paragraph"

const BookMoleculeView: React.FC<BookMoleculeViewProps> = ({
	setBook,
	book,
	onPressIn,
}) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPressIn={onPressIn} className="flex flex-row items-start justify-start gap-2 bg-gray-500 mt-2 rounded-lg overflow-hidden">
			<View className="w-32 h-48 bg-gray-600">
				{book.imageUrl && (
					<Image source={{uri: book.imageUrl}} resizeMode="cover" style={{
						width: '100%',
						height: '100%'
					}}/>
				)}
			</View>

			<View className="pb-2">
				<TitleAtom numberOfLines={1} ellipsizeMode="tail">{book.title}</TitleAtom>
				
				<SubtitleAtom className="line-clamp-1 mb-1">{book.subtitle}</SubtitleAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="tail">
					{book.description}
				</ParagraphAtom>

				<ParagraphAtom numberOfLines={1} ellipsizeMode="tail">
					Autor: {book.author}
				</ParagraphAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="tail">
					Publicado: {book.publishedDate} | {book.publisher}
				</ParagraphAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="tail">
					Categorias: {book.categories}
				</ParagraphAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="tail">
					Idiomas: {book.language}
				</ParagraphAtom>

				<ParagraphAtom numberOfLines={1} ellipsizeMode="tail">
					Páginas: {book.pageCount}
				</ParagraphAtom>
			</View>

		</TouchableOpacity>
	)
}

export { BookMoleculeView }