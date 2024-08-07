export type BookStatus = "readed" | "reading" | "not-readed" | "abandoned";

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
  categories: string[];
  language: string;
  status: BookStatus;
};
