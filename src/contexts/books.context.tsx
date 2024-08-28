import { createContext, useEffect, useState } from "react";
import { BookModel } from "@/models/book.model";
import { bookService } from "@/services/books/book.service";
import useToast from "@/hooks/useToast.hook";

const BooksContext = createContext<BookModel[]>([]);
const Provider = BooksContext.Provider;

interface BookProviderProps {
  children: React.ReactNode;
}

const BooksProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const { addToast } = useToast()

  useEffect(() => {
    bookService
      .getAllMyBooks()
      .then(setBooks)
      .catch((err) => addToast(err.message, 'error'));
  }, []);

   return <Provider value={books}>{children}</Provider>;
};

export {
  BooksProvider, 
  BooksContext
}