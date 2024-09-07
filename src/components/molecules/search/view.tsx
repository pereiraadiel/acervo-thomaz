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
		<View className="mt-2">
			<LabeledInputAtom 
				variant="search" 
				label="Pesquisar" 
				placeholder={placeholder}
				onChangeText={setSearchTerm}
				// onEndEditing={onEndEditing}
				onSubmitEditing={onEndEditing}
				editable={true}
				value={searchTerm}/>
		</View>
	)
}

export { SearchMoleculeView }