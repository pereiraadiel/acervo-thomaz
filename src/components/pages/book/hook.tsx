import useBook from "@/hooks/useBook.hook";

const useBookPage = () => {
	const { book, fetching } = useBook();

	return {
		book,
		fetching
	}
}

export { useBookPage };