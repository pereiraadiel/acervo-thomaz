import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";
import { colors } from "@/styles/colors";
import { ButtonAtom } from "@/components/atoms/button";
import { SubtitleAtom } from "@/components/atoms/subtitle";
import { TitleAtom } from "@/components/atoms/title";
import { RequestCameraMoleculeViewProps } from './interface';

const RequestCameraMoleculeView: React.FC<RequestCameraMoleculeViewProps> = ({
	canAskAgain,
	requestCamera
}) => {
	return (
		<View className="flex-1 px-4 items-center justify-center flex">
			<View className="h-64 w-64 my-4 bg-gray-500 rounded-full flex items-center justify-center">
				<AntDesign name="camera" size={64} color={colors.orange[500]}/>
			</View>
			<TitleAtom className="text-center">Precisamos de acesso à sua câmera</TitleAtom>
			<SubtitleAtom className="font-semibold text-center mt-2">Através de sua câmera poderemos te ajudar a adicionar seus livros pelo escaneamento do código ISBN deles.</SubtitleAtom>
			{canAskAgain ? (
				<ButtonAtom className="mt-4" title="Permitir acesso a câmera" onPressIn={requestCamera} variant="outlined" />
			): (
				<SubtitleAtom className="font-semibold text-center mt-2">Por favor permita o acesso a sua câmera nas configurações do dispositivo.</SubtitleAtom>
			)
			}
		</View>
	)
}

export { RequestCameraMoleculeView };