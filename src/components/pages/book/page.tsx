import { useBookPage } from "./hook";
import { BookPageView } from "./view"
import { LoadingAtom } from "@/components/atoms/loading";

const BookPage = () => {
	const {
		book
	 } = useBookPage();

	if(!book) return <LoadingAtom/>

	 const methods = {
		 book
	 } as const

	return <BookPageView {...methods}/>
}

export { BookPage };