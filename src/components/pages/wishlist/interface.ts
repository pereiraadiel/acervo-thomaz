import { BookModel } from "@/models/book.model";

export interface WishlistPageProps {}

export interface WishlistPageViewProps {
  onSearch: (term: string) => void;
  books: BookModel[];
}
