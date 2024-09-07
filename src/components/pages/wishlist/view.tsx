import { MainTemplate } from "@/components/templates/main.template"
import { SearchMolecule } from "@/components/molecules/search"
import { BookListOrganism } from "@/components/organisms/bookList"
import { WishlistPageViewProps } from "./interface"
import { View } from "react-native"

const WishlistPageView: React.FC<WishlistPageViewProps> = ({
	onSearch,
	books
}) =>{
	return (
		<MainTemplate headerTitle="Lista de desejados" headerSubtitle="Livros que você deseja adquirir">
			<SearchMolecule onSearch={onSearch} placeholder="Pesquisar entre a lista de desejos..."/>
			<BookListOrganism books={books}/>
			<View className='mb-20'></View>
		</MainTemplate>
	)
}

export { WishlistPageView }