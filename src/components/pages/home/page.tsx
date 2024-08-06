import useBooks from "@/hooks/useBooks.hook";
import { bookMockService } from "@/services/books/book.mock.service"
import { HomeView } from "./view";

const HomePage = () => {
	const methods = useBooks(bookMockService);

	return <HomeView {...methods}/>;
}

export { HomePage };