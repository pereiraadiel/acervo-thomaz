import { GoogleBook } from "@/models/google-book.model";
import { BookModel } from "@/models/book.model";

const googleBookToBookMapper = (googleBook: GoogleBook): BookModel => {
  if (googleBook.items) {
    const item = googleBook.items[0];
    return {
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      publishedDate: item.volumeInfo.publishedDate,
      publisher: item.volumeInfo.publisher,
      pageCount: item.volumeInfo.pageCount,
      categories: item.volumeInfo.categories,
      language: item.volumeInfo.language,
      author: item.volumeInfo.authors.join(", "),
      imageUrl: item.volumeInfo.imageLinks.thumbnail,
      description: item.volumeInfo.description,
      id: item.volumeInfo.industryIdentifiers[0].identifier,
      status: "not-readed",
    };
  }
  return {} as BookModel;
};

export { googleBookToBookMapper };
