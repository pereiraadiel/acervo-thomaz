import { useTabsMolecule } from "./hook";
import { TabsMoleculeProps } from "./interface";
import { TabsMoleculeView } from "./view";

const TabsMolecule: React.FC<TabsMoleculeProps> = ({
	initialTab,
	tabs,
}) => {
	const {
		tab: actualTab,
		handleTabChange
	 } = useTabsMolecule(initialTab);

	const component = tabs.find((tab) => tab.name === actualTab)?.component;
	
	const methods = {
		children: component,
		onChangeTab: handleTabChange,
		tab: actualTab,
		tabs: tabs,
	}

	return <TabsMoleculeView {...methods}/>
}

export { TabsMolecule };