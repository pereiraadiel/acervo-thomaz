export type BookStatus =
  | "readed"
  | "reading"
  | "not-readed"
  | "abandoned"
  | "desired"
  | "unknown";

export type BookModel = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  author: string;
  publisher: string;
  publishedDate: string;
  pageCount: number;
  readedPageCount: number;
  categories: string[];
  status: BookStatus;
  language: string;
  rating?: number;
  progress: number;
};
