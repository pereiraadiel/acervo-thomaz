import { View } from "react-native"
import { InputAtom } from "@/components/atoms/input"
import { SearchMoleculeViewProps } from "./interface"

const SearchMoleculeView: React.FC<SearchMoleculeViewProps> = ({
	setSearchTerm,
	searchTerm,
	onPressIn,
	placeholder
}) => {
	return (
		<View>
			<InputAtom 
				variant="search" 
				label="Pesquisar" 
				placeholder={placeholder}
				onPressIn={onPressIn}
				onChangeText={setSearchTerm}
				value={searchTerm}/>
		</View>
	)
}

export { SearchMoleculeView }