import { BookModel } from "@/models/book.model";

export interface BookMoleculeProps {
  book: BookModel;
  onPress: () => void;
}

export interface BookMoleculeViewProps {
  book: BookModel;
  hasImageRenderError: boolean;
  setBook: (book: BookModel) => void;
  setHasImageRenderError: (value: boolean) => void;
  onPress: () => void;
}
