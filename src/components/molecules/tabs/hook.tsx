import { useState } from "react";

const useTabsMolecule = (initialTab: string) => {
	const [tab, setTab] = useState(initialTab);

	const handleTabChange = (newTab: string) => {
		setTab(newTab);
	};

	return { tab, handleTabChange };
}

export { useTabsMolecule };