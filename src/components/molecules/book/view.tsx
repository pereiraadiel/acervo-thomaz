import { TouchableOpacity, View, Image } from "react-native"
import { BookMoleculeViewProps } from "./interface"
import { TitleAtom } from "@/components/atoms/title"
import { SubtitleAtom } from "@/components/atoms/subtitle"
import { ParagraphAtom } from "@/components/atoms/paragraph"
import { BadgeAtom } from "../../atoms/badge"

const BookMoleculeView: React.FC<BookMoleculeViewProps> = ({
	book,
	hasImageRenderError,
	setHasImageRenderError,
	onPress,
}) => {
	const badgeVariant = book.status === 'unknown' ? 'save' : book.status;
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress} className="flex flex-row items-start justify-start gap-2 bg-gray-500 mt-2 mx-1 rounded-2xl overflow-hidden">
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

			<View className="flex-1 justify-between h-48">
				<View>
					<TitleAtom className="pr-2 line-clamp-1 text-lg">{book.title}</TitleAtom>
					
					<SubtitleAtom className="line-clamp-1 mb-1 text-md">{book.subtitle}</SubtitleAtom>
					
					<ParagraphAtom className="pr-2 line-clamp-4 text-sm">
						{book.description}
					</ParagraphAtom>
				</View>

				<View className="py-2 flex-row items-center pr-2 gap-0.5">
					<ParagraphAtom  className="text-[11px] flex-1 line-clamp-1">
						Autor: {book.author}
					</ParagraphAtom>
					{badgeVariant !== 'save' && (
						<BadgeAtom variant={badgeVariant} isActive size="small"/>
					)}
				</View>
			</View>

		</TouchableOpacity>
	)
}

export { BookMoleculeView }