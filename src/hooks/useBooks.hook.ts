import { useContext } from "react";
import { BooksContext } from "@/contexts/books.context";

const useBooks = () => {
  const books = useContext(BooksContext);

  const getBooksByStatus = (
    status: "readed" | "reading" | "not-readed" | "abandoned"
  ) => {
    return books.filter((book) => book.status === status);
  };

  return {
    allBooks: books,
    readedBooks: getBooksByStatus("readed"),
    readingBooks: getBooksByStatus("reading"),
    notReadedBooks: getBooksByStatus("not-readed"),
    abandonedBooks: getBooksByStatus("abandoned"),
  };
};

export default useBooks;
