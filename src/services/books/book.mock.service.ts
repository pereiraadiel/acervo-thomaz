import { BookServiceInterface } from "./book.service.interface";
import { BookModel } from "@/models/book.model";
import { BOOKS } from "@/utils/books";

class BookMockService implements BookServiceInterface {
  async getById(id: string): Promise<BookModel> {
    console.log("getById: ", id);
    console.log(BOOKS.map((book) => book.id));
    return BOOKS.find((book) => book.id === id) || ({} as BookModel);
  }

  async loadBooks(): Promise<BookModel[]> {
    return BOOKS;
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
