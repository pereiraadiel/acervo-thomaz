import { useContext } from "react";
import { BooksContext } from "@/contexts/books.context";
import { BookStatus } from "@/models/book.model";

const useBooks = () => {
  const books = useContext(BooksContext);

  const getBooksByStatus = (status: BookStatus) => {
    return books.filter((book) => book.status === status);
  };

  return {
    allBooks: books,
    readedBooks: getBooksByStatus("readed"),
    readingBooks: getBooksByStatus("reading"),
    notReadedBooks: getBooksByStatus("not-readed"),
    abandonedBooks: getBooksByStatus("abandoned"),
    desiredBooks: getBooksByStatus("desired"),
  };
};

export default useBooks;
