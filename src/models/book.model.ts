export type BookModel = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  status: "readed" | "reading" | "not-readed" | "abandoned";
};
