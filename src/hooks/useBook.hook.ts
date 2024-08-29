import { create } from "zustand";
import { BookModel } from "@/models/book.model";
import { bookService } from "@/services/books/book.service";

interface BookState {
  book: BookModel | undefined;
  fetchBookInfoByIsbn: (isbn: string) => void;
  setBook: (book: BookModel) => void;
  getById: (bookId: string) => void;
  fetching: boolean;
}

const useBook = create<BookState>((set) => ({
  book: undefined,

  fetchBookInfoByIsbn: async (isbn: string) => {
    set({ fetching: true });
    try {
      const response = await bookService.getByIsbn(isbn);
      set({ book: response });
    } catch (err) {
      console.error(err);
    } finally {
      set({ fetching: false });
    }
  },

  setBook: (book: BookModel) => {
    set({ book });
  },

  getById: async (bookId: string) => {
    set({ fetching: true });
    try {
      const response = await bookService.getById(bookId);
      set({ book: response });
    } catch (err) {
      console.error(err);
    } finally {
      set({ fetching: false });
    }
  },

  fetching: false,
}));

export default useBook;
