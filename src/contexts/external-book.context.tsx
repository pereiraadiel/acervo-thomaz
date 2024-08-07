import { createContext, useEffect, useState } from "react";
import { ExternalBookModel } from "@/models/external-book.model";
import { isbnApiService } from "../services/isbn-api/isbn-api.service";
import useBarCode from "@/hooks/useBarCode.hook";

const ExternalBookContext = createContext<ExternalBookModel[]>([]);
const Provider = ExternalBookContext.Provider;

interface ExternalBookProviderProps {
  children: React.ReactNode;
}

const ExternalBookProvider = ({ children }: ExternalBookProviderProps) => {
  const [externalBook, setExternalBook] = useState<ExternalBookModel>();
  const [isbn, setIsbn] = useState<string>('');

  const { result } = useBarCode();

  console.log('the isbn is: ',isbn);

  useEffect(() => {
    console.log('the result is: ',result);
    setIsbn(result.data);
  }, [result]);

  useEffect(() => {
    isbnApiService.getBookInfoByIsbn(isbn)
      .then(book => {setExternalBook(book), console.log('the book is on the table: ',book)})
      .catch(err => console.error(err))
  }, [isbn]);

   return <Provider value={externalBook}>{children}</Provider>;
};

export {
  ExternalBookProvider, 
  ExternalBookContext
}