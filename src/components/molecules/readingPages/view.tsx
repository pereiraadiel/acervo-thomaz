import { View } from "react-native";
import { ReadingPagesMoleculeViewProps } from "./interface";
import { InputAtom } from "@/components/atoms/input";
import { TitleAtom } from "@/components/atoms/title";
import { ButtonAtom } from "@/components/atoms/button";

const ReadingPagesMoleculeView: React.FC<ReadingPagesMoleculeViewProps> = ({ maxPages, onChangeValue, inputValue, error, onButtonPress }) => {
	return (
		<View className="flex bg-gray-600 p-4 rounded-3xl mt-1 gap-2 w-full">
			<TitleAtom>Páginas lidas:</TitleAtom>
			<View className="w-full">
				<InputAtom 
					type="numeric" 
					placeholder="0/200" 
					className="p-2 bg-transparent" 
					maxLength={maxPages}
					value={inputValue}
					error={error}
					onChangeText={onChangeValue}
				/>
			</View>
			<ButtonAtom title="Registrar leitura" onPress={onButtonPress} className={error && 'opacity-30'} disabled={!!error}/>
		</View>
	)
}

export { ReadingPagesMoleculeView };