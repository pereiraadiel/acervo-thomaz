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
			<SearchMolecule onSearch={onSearch}/>
			<BookListOrganism books={books}/>
		</MainTemplate>
	)
}

export { WishlistPageView }