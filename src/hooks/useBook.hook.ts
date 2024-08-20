import { useContext } from "react";
import { BookContext } from "@/contexts/book.context";

const useBook = () => {
  const [{ book, fetching, fetchBookInfoByIsbn, setBook , getById }] = useContext(BookContext);

  return {
    book,
    setBook,
    getById,
    fetching,
    fetchBookInfoByIsbn,
  };
};

export default useBook;
