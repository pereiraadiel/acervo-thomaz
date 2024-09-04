import useBooks from "@/hooks/useBooks.hook";
import { HomeView } from "./view";
import { useEffect } from "react";

const HomePage = () => {
	const methods = useBooks();

	useEffect(() => {
		methods.fetchBooks()
	}, [])

	return <HomeView {...methods}/>;
}

export { HomePage };