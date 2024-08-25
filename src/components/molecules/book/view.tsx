import { TouchableOpacity, View, Image } from "react-native"
import { BookMoleculeViewProps } from "./interface"
import { TitleAtom } from "@/components/atoms/title"
import { SubtitleAtom } from "@/components/atoms/subtitle"
import { ParagraphAtom } from "@/components/atoms/paragraph"

const BookMoleculeView: React.FC<BookMoleculeViewProps> = ({
	book,
	hasImageRenderError,
	setHasImageRenderError,
	onPress,
}) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress} className="flex flex-row items-start justify-start gap-2 bg-gray-500 mt-2 rounded-lg overflow-hidden">
			<View className="w-32 h-48 bg-gray-500">
				{book.imageUrl && (
					<Image 
						source={hasImageRenderError ? require('@/assets/placeholder-cover.png') : {uri: book.imageUrl}} 
						resizeMode="cover"
						onError={e => setHasImageRenderError(true)} 
						style={{
							width: '100%',
							height: '100%'
						}}
					/>
				)}
			</View>

			<View className="pb-2">
				<TitleAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">{book.title}</TitleAtom>
				
				<SubtitleAtom className="line-clamp-1 mb-1">{book.subtitle}</SubtitleAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">
					{book.description}
				</ParagraphAtom>

				<ParagraphAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">
					Autor: {book.author}
				</ParagraphAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">
					Publicado: {book.publishedDate} | {book.publisher}
				</ParagraphAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">
					Categorias: {book.categories}
				</ParagraphAtom>
				
				<ParagraphAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">
					Idiomas: {book.language}
				</ParagraphAtom>

				<ParagraphAtom numberOfLines={1} ellipsizeMode="clip" className="pr-2">
					Páginas: {book.pageCount}
				</ParagraphAtom>
			</View>

		</TouchableOpacity>
	)
}

export { BookMoleculeView }