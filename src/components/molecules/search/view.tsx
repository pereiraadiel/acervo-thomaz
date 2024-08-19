import { View } from "react-native"
import { LabeledInputAtom } from "@/components/atoms/labeledInput"
import { SearchMoleculeViewProps } from "./interface"

const SearchMoleculeView: React.FC<SearchMoleculeViewProps> = ({
	setSearchTerm,
	searchTerm,
	onEndEditing,
	placeholder
}) => {
	return (
		<View>
			<LabeledInputAtom 
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