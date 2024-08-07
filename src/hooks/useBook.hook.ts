import { useContext } from "react";
import { BookContext } from "@/contexts/book.context";

const useBook = () => {
  const [{ book, fetching, fetchBookInfoByIsbn, setBook }] = useContext(BookContext);

  return {
    book,
    setBook,
    fetching,
    fetchBookInfoByIsbn,
  };
};

export default useBook;
