import { BookServiceInterface } from "./book.service.interface";
import { BookModel } from "@/models/book.model";
import { BOOKS } from "@/utils/books";

class BookMockService implements BookServiceInterface {
  async getById(id: string): Promise<BookModel> {
    console.log("getById: ", id);
    console.log(BOOKS.map((book) => book.id));
    return BOOKS.find((book) => book.id === id) || ({} as BookModel);
  }

  async getAllMyBooks(): Promise<BookModel[]> {
    return BOOKS.filter((book) => book.status !== "unknown");
  }

  async getByIsbn(isbn: string): Promise<BookModel> {
    return BOOKS.find((book) => book.isbn === isbn) || ({} as BookModel);
  }

  async search(query: string): Promise<BookModel[]> {
    return BOOKS.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
  }
}

class Singleton {
  private instance!: BookServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new BookMockService();
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const bookMockService = singleton.getInstance();
Object.freeze(bookMockService);

export { bookMockService };
