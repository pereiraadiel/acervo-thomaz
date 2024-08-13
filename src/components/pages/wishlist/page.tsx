import { WishlistPageProps } from "./interface"
import { WishlistPageView } from "./view"
import { useWishlistPage } from "./hook"

const WishlistPage: React.FC<WishlistPageProps> = () =>{
	const { books, onSearch } = useWishlistPage()
	
	const methods = {
		onSearch,
		books
	}

	return <WishlistPageView {...methods}/>
}

export { WishlistPage }