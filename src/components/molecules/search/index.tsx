import { useEffect } from "react";
import { useSearchMolecule } from "./hook";
import { SearchMoleculeProps } from "./interface";
import { SearchMoleculeView } from "./view";

const SearchMolecule: React.FC<SearchMoleculeProps> = ({
	onSearch,
	onPressIn,
	placeholder
}) => {
	const { searchTerm, setSearchTerm } = useSearchMolecule('');

	useEffect(() => {
		if(searchTerm.length > 3 || searchTerm.length === 0) {
			onSearch(searchTerm);
		}
	}, [searchTerm])

	const methods = {
		searchTerm,
		setSearchTerm,
		onPressIn,
		placeholder
	}

	return <SearchMoleculeView {...methods}/>
}

export { SearchMolecule };