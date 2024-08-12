import { BookModel } from "@/models/book.model";

export interface BookMoleculeProps {
  book: BookModel;
  onPressIn: () => void;
}

export interface BookMoleculeViewProps {
  book: BookModel;
  setBook: (book: BookModel) => void;
  onPressIn: () => void;
}
