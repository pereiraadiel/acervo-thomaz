import { createContext, useEffect, useState } from "react";
import { ExternalBookModel } from "@/models/external-book.model";
import { isbnApiService } from "../services/isbn-api/isbn-api.service";

const ExternalBookContext = createContext<ExternalBookModel[]>([]);
const Provider = ExternalBookContext.Provider;

interface ExternalBookProviderProps {
  children: React.ReactNode;
  isbn: string;
}

const ExternalBookProvider = ({ children, isbn }: ExternalBookProviderProps) => {
  const [externalBook, setExternalBook] = useState<ExternalBookModel>();

  useEffect(() => {
    isbnApiService.getBookInfoByIsbn(isbn)
      .then(book => setExternalBook(book))
      .catch(err => console.error(err))
  }, [isbn]);

   return <Provider value={externalBook}>{children}</Provider>;
};

export {
  ExternalBookProvider, 
  ExternalBookContext
}