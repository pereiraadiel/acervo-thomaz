import { createContext, useCallback, useEffect, useState } from "react";
import { BookModel } from "@/models/book.model";
import { isbnApiService } from "@/services/isbn-api/google-isbn-api.service";

const BookContext = createContext<BookContextType[]>([]);
const Provider = BookContext.Provider;
interface BookContextType {
  book: BookModel | undefined;
  fetchBookInfoByIsbn: (isbn: string) => void;
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
    isbnApiService
    .getBookInfoByIsbn(isbn)
    .then(setBook)
    .catch((err) => console.error(err))
    .finally(() => setFetching(false));
  };
  
  const [bookContext, setBookContext] = useState<BookContextType>({
    book,
    fetchBookInfoByIsbn,
    fetching,
  });

  useEffect(() => {
    setBookContext({
      book,
      fetchBookInfoByIsbn,
      fetching,
    });
  }, [book, fetching]);
  
   return <Provider value={[bookContext]}>{children}</Provider>;
};

export {
  BookProvider, 
  BookContext
}