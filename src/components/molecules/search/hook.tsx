import { useEffect, useState } from "react";

const useSearchMolecule = (term: string) => {
	const [searchTerm, setSearchTerm] = useState(term);

	useEffect(() => {
		setSearchTerm(term);
	}, [term])

	return {
		searchTerm,
		setSearchTerm
	}
}

export { useSearchMolecule };