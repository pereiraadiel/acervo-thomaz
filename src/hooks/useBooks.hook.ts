import { create } from "zustand";
import { BookModel, BookStatus } from "@/models/book.model";
import { bookService } from "@/services/books/book.service";

export interface BooksState {
  books: BookModel[];
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
    const { books } = get();
    return books.filter((book) => book.status === status);
  };

  return {
    books: [],
    allBooks: [],
    readedBooks: [],
    readingBooks: [],
    notReadedBooks: [],
    abandonedBooks: [],
    desiredBooks: [],
    
    fetchBooks: async () => {
      try {
        const response = await bookService.getAllMyBooks();
        set({
          books: response,
          allBooks: response.filter((book) => {
            if (book.status !== "desired" && book.status !== "unknown")
              return book;
          }),
        });

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
