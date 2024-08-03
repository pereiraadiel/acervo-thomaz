import { useState, useEffect } from "react";
import { BOOKS } from "../utils/books";

type Book = {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  status: "readed" | "reading" | "not-readed" | "abandoned";
};

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const booksData: Book[] = BOOKS as any;

    setBooks(booksData);
  }, []);

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
