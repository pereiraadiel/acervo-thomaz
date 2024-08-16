import { useTabsMolecule, useTabsScroll } from "./hook";
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

	const scroll = useTabsScroll(tabs, actualTab, handleTabChange);

	const component = tabs.find((tab) => tab.name === actualTab)?.component;

	const methods = {
		children: component,
		onChangeTab: handleTabChange,
		tab: actualTab,
		tabs: tabs,
		scroll: scroll,
	}

	return <TabsMoleculeView {...methods}/>
}

export { TabsMolecule };