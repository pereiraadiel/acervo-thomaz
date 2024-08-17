import { View, Text, Image } from "react-native";
import { BookDetailsMoleculeViewProps } from "./interface";
import { TitleAtom } from "../../atoms/title";
import { SubtitleAtom } from "../../atoms/subtitle";
import { ParagraphAtom } from "../../atoms/paragraph";
import { BadgeAtom } from "../../atoms/badge";

const BookDetailsMoleculeView: React.FC<BookDetailsMoleculeViewProps> = ({
	book
}) => {
	console.log('book', book);
	return (
		<View className="flex items-center mt-2 px-4">
			<View className="z-20 w-[90%] h-[420px] rounded-2xl overflow-hidden">
				<Image source={{uri: book.imageUrl}} resizeMode="cover" style={{
					width: '100%',
					height: '100%'
				}}/>
			</View>

			<View className="z-10 bg-gray-500 w-full rounded-2xl p-4 -mt-12 pt-14 min-h-80 flex items-center">
				<BadgeAtom variant="save" isActive/>
				<TitleAtom className="text-center">{book.title}</TitleAtom>
				<SubtitleAtom className="text-center" >{book.subtitle}</SubtitleAtom>
				<ParagraphAtom className="text-center mt-4 text-gray-900">{book.description}</ParagraphAtom>
			</View>
		</View>
	)
}

export { BookDetailsMoleculeView };