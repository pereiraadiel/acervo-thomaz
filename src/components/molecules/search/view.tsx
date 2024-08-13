import { View } from "react-native"
import { InputAtom } from "@/components/atoms/input"
import { SearchMoleculeViewProps } from "./interface"

const SearchMoleculeView: React.FC<SearchMoleculeViewProps> = ({
	setSearchTerm,
	searchTerm,
	onEndEditing,
	placeholder
}) => {
	return (
		<View>
			<InputAtom 
				variant="search" 
				label="Pesquisar" 
				placeholder={placeholder}
				onChangeText={setSearchTerm}
				onEndEditing={onEndEditing}
				value={searchTerm}/>
		</View>
	)
}

export { SearchMoleculeView }