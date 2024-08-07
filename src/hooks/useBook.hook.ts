import { useContext } from "react";
import { BookContext } from "@/contexts/book.context";

const useBook = () => {
  const [{ book, fetching, fetchBookInfoByIsbn }] = useContext(BookContext);

  return {
    book,
    fetching,
    fetchBookInfoByIsbn,
  };
};

export default useBook;
