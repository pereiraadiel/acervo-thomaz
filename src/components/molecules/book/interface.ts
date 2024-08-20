import { BookModel } from "@/models/book.model";

export interface BookMoleculeProps {
  book: BookModel;
  onPress: () => void;
}

export interface BookMoleculeViewProps {
  book: BookModel;
  setBook: (book: BookModel) => void;
  onPress: () => void;
}
