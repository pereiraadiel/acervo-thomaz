import { createContext, useCallback, useEffect, useState } from "react";
import { BookModel } from "@/models/book.model";
import { bookService } from "@/services/books/book.service";

const BookContext = createContext<BookContextType[]>([]);
const Provider = BookContext.Provider;
interface BookContextType {
  book: BookModel | undefined;
  fetchBookInfoByIsbn: (isbn: string) => void;
  setBook: (book: BookModel) => void;
  getById(bookId: string): void;
  fetching: boolean;
};

interface BookProviderProps {
  children: React.ReactNode;
}

const BookProvider = ({ children }: BookProviderProps) => {
  const [book, setBook] = useState<BookModel>();
  const [fetching, setFetching] = useState(false);

  const fetchBookInfoByIsbn = async (isbn: string) => {
    setFetching(true);
    bookService
    .getByIsbn(isbn)
    .then(setBook)
    .catch((err) => console.error(err))
    .finally(() => setFetching(false));
  };

  const getById = useCallback((bookId: string) => {
    setFetching(true);
    bookService
    .getById(bookId)
    .then(setBook)
    .catch((err) => console.error(err))
    .finally(() => setFetching(false));
  }, []);
  
  const [bookContext, setBookContext] = useState<BookContextType>({
    book,
    fetchBookInfoByIsbn,
    setBook,
    fetching,
    getById
  });

  useEffect(() => {
    setBookContext({
      book,
      fetchBookInfoByIsbn,
      setBook,
      fetching,
      getById
    });
  }, [book, fetching]);
  
   return <Provider value={[bookContext]}>{children}</Provider>;
};

export {
  BookProvider, 
  BookContext
}