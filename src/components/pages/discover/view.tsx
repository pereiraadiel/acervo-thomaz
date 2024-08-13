import { MainTemplate } from "@/components/templates/main.template";
import { SearchMolecule } from "@/components/molecules/search";
import { BookListOrganism } from "@/components/organisms/bookList";
import { DiscoverPageViewProps } from "./interface";
import { LoadingAtom } from "@/components/atoms/loading";
import { TabsMolecule } from "@/components/molecules/tabs";

const DiscoverPageView: React.FC<DiscoverPageViewProps> = ({
	books,
	onSearch,
	loading,
}) => {

	const searchComponent = (
		<>
			<SearchMolecule onSearch={onSearch}/>
			{loading ? <LoadingAtom /> : (
				<>
				<BookListOrganism books={books}/>
				</>
			)}
		</>
	)

	const scanBarcodeComponent = (
		<></>
	)

	return (
		<MainTemplate>
			<TabsMolecule
				initialTab="search"
				tabs={[
					{ name: 'search', component: searchComponent },
					{ name: 'scan-barcode', component: scanBarcodeComponent }
				]}
			/>
			
		</MainTemplate>
	)
};

export { DiscoverPageView };