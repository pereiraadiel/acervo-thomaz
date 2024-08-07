export type GoogleBookItem = {
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: { type: "ISBN_13" | "ISBN_10"; identifier: string }[];
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
  };
};

export type GoogleBook = {
  kind: string;
  totalItems: number;
  items?: GoogleBookItem[];
};