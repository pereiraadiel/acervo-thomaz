import useBook from "@/hooks/useBook.hook";

const useBookPage = () => {
	const { book } = useBook();

	return {
		book
	}
}

export { useBookPage };