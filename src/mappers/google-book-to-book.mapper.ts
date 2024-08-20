import { GoogleBook } from "@/models/google-book.model";
import { BookModel } from "@/models/book.model";

const googleBookToBookMapper = (googleBook: GoogleBook): BookModel => {
  if (googleBook.items) {
    const item = googleBook.items[0];
    console.log("googleBookToBookMapper · item: ", item);
    return {
      title: item.volumeInfo?.title || "",
      subtitle: item.volumeInfo?.subtitle || "",
      publishedDate: item.volumeInfo?.publishedDate || "",
      publisher: item.volumeInfo?.publisher || "",
      pageCount: item.volumeInfo?.pageCount || 0,
      categories: item.volumeInfo?.categories || "",
      language: item.volumeInfo?.language || "",
      author: item.volumeInfo?.authors?.join(", ") || "",
      imageUrl: item.volumeInfo?.imageLinks?.thumbnail || "",
      description: item.volumeInfo?.description || "",
      readedPageCount: 0,
      progress: 0,
      id: item.volumeInfo.id,
      status: "unknown",
    };
  }
  return {} as BookModel;
};

const googleBookToBooksMapper = (googleBook: GoogleBook): BookModel[] => {
  if (googleBook.items) {
    const items = googleBook.items;
    console.log("googleBookToBookMapper · item: ", items);
    return items.map((item) => {
      return {
        title: item.volumeInfo?.title || "",
        subtitle: item.volumeInfo?.subtitle || "",
        publishedDate: item.volumeInfo?.publishedDate || "",
        publisher: item.volumeInfo?.publisher || "",
        pageCount: item.volumeInfo?.pageCount || 0,
        categories: item.volumeInfo?.categories || "",
        language: item.volumeInfo?.language || "",
        author: item.volumeInfo?.authors?.join(", ") || "",
        imageUrl: item.volumeInfo?.imageLinks?.thumbnail || "",
        description: item.volumeInfo?.description || "",
        id: item.volumeInfo.id,
        readedPageCount: 0,
        progress: 0,
        status: "unknown",
      };
    });
  }
  return [];
};

export { googleBookToBookMapper, googleBookToBooksMapper };
