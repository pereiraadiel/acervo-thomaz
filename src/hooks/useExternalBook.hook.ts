import { useContext } from "react";
import { ExternalBookContext } from "@/contexts/external-book.context";

const useExternalBook = () => {
  const book = useContext(ExternalBookContext)[0];

  return {
    book,
  };
};

export default useExternalBook;
