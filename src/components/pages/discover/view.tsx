import { MainTemplate } from "@/components/templates/main.template";
import { SearchMolecule } from "@/components/molecules/search";
import { BookListOrganism } from "@/components/organisms/bookList";
import { DiscoverPageViewProps } from "./interface";
import { LoadingAtom } from "@/components/atoms/loading";
import { TabsMolecule } from "@/components/molecules/tabs";
import { BookScanner } from "@/components/organisms/bookScanner";
import { View } from "react-native";

const DiscoverPageView: React.FC<DiscoverPageViewProps> = ({
	books,
	onSearch,
	loading,
}) => {

	const searchComponent = (
		<>
			<SearchMolecule onSearch={onSearch} placeholder="Encontre novos livros e adicione-os a sua estante..."/>
			{loading ? <LoadingAtom /> : (
				<>
				<BookListOrganism books={books}/>
				</>
			)}
		</>
	)

	const scanBarcodeComponent = (
		<BookScanner/>	
	)

	return (
		<MainTemplate headerTitle="Descobrir" headerSubtitle="Encontre um livro e adicione-o a sua estante">
			<TabsMolecule
				initialTab="search"
				tabs={[
					{ name: 'search', component: searchComponent },
					{ name: 'scan-barcode', component: scanBarcodeComponent }
				]}
			/>
			<View className='mb-20'></View>
		</MainTemplate>
	)
};

export { DiscoverPageView };