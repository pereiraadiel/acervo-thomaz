import { BookModel, BookStatus } from "@/models/book.model";

export interface BookDetailsMoleculeProps {
  book: BookModel;
}

export interface BookDetailsMoleculeViewProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSubmit: () => void;
  handleReadingRegister: (id: string, readedPageCount: number) => void;
  handleEnableReadingRegister: () => void;
  setHasImageRenderError: (value: boolean) => void;
  hasImageRenderError: boolean;
  isRegisteringReading: boolean;
  isChangingStatus: boolean;
  handleEnableStatusChange: () => void;
  handleStatusChange: (status: BookStatus) => void;
  book: BookModel;
  notes: { content: string; date: string }[];
}
