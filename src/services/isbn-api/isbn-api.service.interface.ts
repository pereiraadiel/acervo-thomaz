import { ExternalBookModel } from "@/models/external-book.model";

export interface IsbnApiServiceInterface {
	getBookInfoByIsbn(isbn: string): Promise<ExternalBookModel>
}