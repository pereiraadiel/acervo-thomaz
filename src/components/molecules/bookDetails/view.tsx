import { View, Image } from "react-native";
import { BookDetailsMoleculeViewProps } from "./interface";
import { TitleAtom } from "@/components/atoms/title";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { ParagraphAtom } from "@/components/atoms/paragraph";
import { BadgeAtom } from "@/components/atoms/badge";
import { ProgressAtom } from "@/components/atoms/progress";
import { InputAtom } from "@/components/atoms/input";
import { NoteMolecule } from "@/components/molecules/note";
import { ReadingPagesMolecule } from "../readingPages";

const BookDetailsMoleculeView: React.FC<BookDetailsMoleculeViewProps> = ({
	inputValue,
	onSubmit,
	setInputValue,
	handleEnableReadingRegister,
	handleReadingRegister,
	setHasImageRenderError,
	hasImageRenderError,
	isRegisteringReading,
	book,
	handleEnableStatusChange,
	handleStatusChange,
	isChangingStatus,
	notes
}) => {
	const variants = {
		'readed': 'readed',
		'reading': 'reading',
		'not-readed': 'not-readed',
		'abandoned': 'abandoned',
		'desired': 'desired',
		'unknown': 'save'
	} as const

	const variant = variants[book.status];

	const isNotReaded = book.status === 'not-readed' || book.status === 'desired' || book.status === 'unknown';

	return (
		<>
			<View className="z-10 w-auto h-[580px] rounded-b-2xl overflow-hidden">
				{book.imageUrl && (
					<Image 
						source={ hasImageRenderError ? require('@/assets/placeholder-cover.png') : { uri:  book.imageUrl}} 
						resizeMode="cover"
						onError={(e) => setHasImageRenderError(true)} 
						style={{
							width: '100%',
							height: '100%'
						}}
					/>
				)}
			</View>

			<View className="z-20 flex items-center px-4">
				<View className="bg-gray-500 w-full rounded-2xl p-4 -mt-2 pt-4 pb-10 flex items-center relative">
					<BadgeAtom className="mb-2" variant={variant} isActive onPress={handleEnableStatusChange} />
					<TitleAtom className="text-center">{book.title}</TitleAtom>
					<SubtitleAtom className="text-center" >{book.subtitle}</SubtitleAtom>
					<ParagraphAtom className="text-left mt-4 text-gray-900">{book.description}</ParagraphAtom>


				 {isChangingStatus && (
					<View className="absolute inset-0 top-16 bg-gray-600 rounded-3xl p-4 z-10 flex items-center">
						<TitleAtom className="mb-4">Selecione o status do seu livro</TitleAtom>
						<View className="flex-row gap-x-2">
							<View className="flex items-start gap-2">
								<BadgeAtom className="w-full" variant='readed' isActive onPress={() => handleStatusChange('readed')} />
								<BadgeAtom className="w-full" variant='reading' isActive onPress={() => handleStatusChange('reading')} />
								<BadgeAtom className="w-full" variant='not-readed' isActive onPress={() => handleStatusChange('not-readed')} />
							</View>

							<View className="flex items-start gap-2">
								<BadgeAtom className="w-full" variant='desired' isActive onPress={() => handleStatusChange('desired')} />
								<BadgeAtom className="w-full" variant='abandoned' isActive onPress={() => handleStatusChange('abandoned')} />
							</View>
						</View>
					</View>
				 )}


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

					<View className="mt-4 flex items-center">
						<ProgressAtom progress={book.progress} variant="default" />
						<ParagraphAtom>páginas lidas: {book.readedPageCount}/{book.pageCount}</ParagraphAtom>
					</View>
				</View>
					
				<BadgeAtom isActive variant="reading-register" className="-mt-3"  onPress={handleEnableReadingRegister}/>

				{isRegisteringReading && book.status !== 'unknown' && (
					<ReadingPagesMolecule onSubmit={handleReadingRegister} maxPages={200}/>
				)}
			</View>


			<TitleAtom className="ml-4 mt-6">{isNotReaded ? 'Anotações': 'Minhas Resenhas'}</TitleAtom>
			<SubtitleAtom className="ml-4 mb-2">
				{isNotReaded ? 'Registre anotações sobre o livro' : 'Minhas análises feitas ao longo da leitura do livro'}
			</SubtitleAtom>
			
			<View className="w-full px-4">
				<InputAtom
					type='multiline'
					className=""
					value={inputValue}
					onChangeText={setInputValue}
					onSubmitEditing={() => onSubmit()}
					onEndEditing={() => onSubmit()}
					onSubmit={onSubmit}
					placeholder={isNotReaded ? 'Faça uma anotação sobre o livro...': "Registre uma resenha sobre a sua leitura..."}
				/>
			</View>

			{notes.map((note, index) => (
				<NoteMolecule
					key={index}
					content={note.content}
					date={note.date}
					className="mt-1"
				/>
			))}
		</>
	)
}

export { BookDetailsMoleculeView };