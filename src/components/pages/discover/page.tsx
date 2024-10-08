import { useDiscoverPage } from "./hook";
import { DiscoverPageProps } from "./interface";
import { DiscoverPageView } from "./view";

const DiscoverPage: React.FC<DiscoverPageProps> = ({}) => {
	const {
		books,
		onSearch,
		loading,
	} = useDiscoverPage();

	const methods = {
		books,
		onSearch,
		loading
	}

	return <DiscoverPageView {...methods}/>
};

export { DiscoverPage };