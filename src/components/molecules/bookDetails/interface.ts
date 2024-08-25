import { BookModel } from "@/models/book.model";

export interface BookDetailsMoleculeProps {
  book: BookModel;
}

export interface BookDetailsMoleculeViewProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSubmit: () => void;
  handleReadingRegister: () => void;
  handleEnableReadingRegister: () => void;
  setHasImageRenderError: (value: boolean) => void;
  hasImageRenderError: boolean;
  isRegisteringReading: boolean;
  book: BookModel;
  notes: { content: string; date: string }[];
}
