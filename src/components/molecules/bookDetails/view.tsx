import { View, Image } from "react-native";
import { BookDetailsMoleculeViewProps } from "./interface";
import { TitleAtom } from "@/components/atoms/title";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { ParagraphAtom } from "@/components/atoms/paragraph";
import { BadgeAtom } from "@/components/atoms/badge";
import { ProgressAtom } from "@/components/atoms/progress";
import { InputAtom } from "@/components/atoms/input";
import { NoteMolecule } from "../note";

const BookDetailsMoleculeView: React.FC<BookDetailsMoleculeViewProps> = ({
	book
}) => {
	console.log('book', book);
	return (
		<>
			<View className="z-10 w-full h-[480px] rounded-b-2xl overflow-hidden">
				<Image source={{uri: book.imageUrl}} resizeMode="cover" style={{
					width: '100%',
					height: '100%'
				}}/>
			</View>

			<View className="z-20 flex items-center px-4">
				<View className="bg-gray-500 w-full rounded-2xl p-4 -mt-2 pt-4 min-h-80 flex items-center">
					<BadgeAtom className="mb-2" variant="save" isActive/>
					<TitleAtom className="text-center">{book.title}</TitleAtom>
					<SubtitleAtom className="text-center" >{book.subtitle}</SubtitleAtom>
					<ParagraphAtom className="text-left mt-4 text-gray-900">{book.description}</ParagraphAtom>

					<View className="w-full mt-4 flex flex-row justify-between gap-2">
						<View className="flex w-1/2">
							<ParagraphAtom className="flex">Autores: {book.author}</ParagraphAtom>
							{book.publisher && (
								<ParagraphAtom className="flex">Publicado por: {book.publisher} | {book.publishedDate}</ParagraphAtom>
							)}
						</View>

						<View className="w-1/2 items-end">
							{book.language && (
								<ParagraphAtom className="flex">Idiomas: {book.language}</ParagraphAtom>
							)}
							<ParagraphAtom className="flex">Páginas: {book.pageCount}</ParagraphAtom>
						</View>
					</View>

					<ProgressAtom progress={37} variant="default"/>
				</View>
			</View>

			<InputAtom
				type='multiline'
				className="mt-6 mx-4 mb-2"
				placeholder="Registre uma resenha sobre o que você achou do livro"
			/>

			<NoteMolecule
				content="Gostei muito do livro, recomendo a leitura"
				date="15/09/2021"
				className="mt-1"
			/>

			<NoteMolecule
				content="Gostei muito do livro, recomendo a leitura"
				date="15/09/2021"
				className="mt-1"
			/>

			<NoteMolecule
				content="Gostei muito do livro, recomendo a leitura"
				date="15/09/2021"
				className="mb-28 mt-1"
			/>
		</>
	)
}

export { BookDetailsMoleculeView };