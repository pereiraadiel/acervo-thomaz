import { useEffect } from "react";
import { useSearchMolecule } from "./hook";
import { SearchMoleculeProps } from "./interface";
import { SearchMoleculeView } from "./view";

const SearchMolecule: React.FC<SearchMoleculeProps> = ({
	onSearch,
	placeholder
}) => {
	const { searchTerm, setSearchTerm } = useSearchMolecule('');

	useEffect(() => {
		if(searchTerm.length > 3) {
			onSearch(searchTerm);
		}
	}, [searchTerm])

	const onEndEditing = () => {
		if(searchTerm.length > 3) {
			onSearch(searchTerm);
		}
	}

	const methods = {
		searchTerm,
		setSearchTerm,
		placeholder,
		onEndEditing
	}

	return <SearchMoleculeView {...methods}/>
}

export { SearchMolecule };