import useBooks from "@/hooks/useBooks.hook";
import { HomeView } from "./view";

const HomePage = () => {
	const methods = useBooks();

	return <HomeView {...methods}/>;
}

export { HomePage };