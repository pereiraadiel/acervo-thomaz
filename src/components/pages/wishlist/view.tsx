import { MainTemplate } from "@/components/templates/main.template"
import { SearchMolecule } from "@/components/molecules/search"
import { BookListOrganism } from "@/components/organisms/bookList"
import { WishlistPageViewProps } from "./interface"

const WishlistPageView: React.FC<WishlistPageViewProps> = ({
	onSearch,
	books
}) =>{
	return (
		<MainTemplate headerTitle="Lista de desejados" headerSubtitle="Livros que você deseja adquirir">
			<SearchMolecule onSearch={onSearch} placeholder="Buscar na lista de desejos..."/>
			<BookListOrganism books={books}/>
		</MainTemplate>
	)
}

export { WishlistPageView }