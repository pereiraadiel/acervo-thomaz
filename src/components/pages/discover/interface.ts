import { BookModel } from "@/models/book.model";

export interface DiscoverPageProps {}

export interface DiscoverPageViewProps {
  books: BookModel[];
	onSearch: (text: string) => void;
	loading: boolean;
}
