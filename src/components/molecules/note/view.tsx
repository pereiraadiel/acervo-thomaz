import { View } from "react-native";
import { NoteMoleculeViewProps } from "./interface";
import { MaterialIcons } from '@expo/vector-icons';
import { ParagraphAtom } from "@/components/atoms/paragraph";
import { colors } from "@/styles/colors";

const NoteMoleculeView: React.FC<NoteMoleculeViewProps> = ({content, date, className}) => {
	const formattedDate = new Date(date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'});

	return (
		<View className={`bg-gray-500 m-2 rounded-xl pb-2 ${className}`}>
			<View className="flex flex-row items-center gap-2 mb-2">
				<View className="p-2 ml-2 mt-2 bg-green-400 rounded-full w-10 h-10 flex items-center justify-center">
					<MaterialIcons name='sticky-note-2' size={24} color={colors.gray[700]} />
				</View>
				<ParagraphAtom className="my-0 text-semibold text-gray-900">{formattedDate}</ParagraphAtom>
			</View>
			<ParagraphAtom className="ml-4 text-gray-900">{content}</ParagraphAtom>
		</View>
	)
}

export { NoteMoleculeView };