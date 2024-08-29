import { useState } from "react";
import { BookModel } from "@/models/book.model";
import { bookService } from "@/services/books/book.service";

const useSearchBooks = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchBooks = async (query: string) => {
    if (query === "") {
      setBooks([]);
      return;
    }
    setLoading(true);
    bookService
      .search(query)
      .then(setBooks)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { books, loading, error, searchBooks };
};

export default useSearchBooks;
