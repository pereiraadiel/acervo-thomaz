import { createContext, useEffect, useState } from "react";
// import { bookService } from "@/services/books/book.service";
import { bookMockService } from "@/services/books/book.mock.service";
import { BookModel } from "@/models/book.model";

const BooksContext = createContext<BookModel[]>([]);
const Provider = BooksContext.Provider;

interface BookProviderProps {
  children: React.ReactNode;
}

const BooksProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    bookMockService
      .loadBooks()
      .then(setBooks)
      .catch((err) => console.error(err));
  }, []);

   return <Provider value={books}>{children}</Provider>;
};

export {
  BooksProvider, 
  BooksContext
}