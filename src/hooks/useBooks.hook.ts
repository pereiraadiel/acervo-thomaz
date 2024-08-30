import { create } from "zustand";
import { BookModel, BookStatus } from "@/models/book.model";
import { bookService } from "@/services/books/book.service";

export interface BooksState {
  allBooks: BookModel[];
  readedBooks: BookModel[];
  readingBooks: BookModel[];
  notReadedBooks: BookModel[];
  abandonedBooks: BookModel[];
  desiredBooks: BookModel[];
  fetchBooks: () => void;
}

const useBooks = create<BooksState>((set, get) => {
  const getBooksByStatus = (status: BookStatus): BookModel[] => {
    const { allBooks } = get();
    return allBooks.filter((book) => book.status === status);
  };

  return {
    allBooks: [],
    readedBooks: [],
    readingBooks: [],
    notReadedBooks: [],
    abandonedBooks: [],
    desiredBooks: [],

    fetchBooks: async () => {
      try {
        const response = await bookService.getAllMyBooks();
        set({ allBooks: response });

        set({
          readedBooks: getBooksByStatus("readed"),
          readingBooks: getBooksByStatus("reading"),
          notReadedBooks: getBooksByStatus("not-readed"),
          abandonedBooks: getBooksByStatus("abandoned"),
          desiredBooks: getBooksByStatus("desired"),
        });
      } catch (err: any) {
        console.error("useBooks.fetchBooks", err);
      }
    },
  };
});

export default useBooks;
