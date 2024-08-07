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
  status: "readed" | "reading" | "not-readed" | "abandoned";
};
