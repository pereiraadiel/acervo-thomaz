import { BookServiceInterface } from "./book.service.interface";
import { BookModel } from "@/models/book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";

class BookService implements BookServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async loadBooks(): Promise<BookModel[]> {
    return this.apiService.get("books");
  }

  async getById(id: string): Promise<BookModel> {
    return this.apiService.get(`books/${id}`);
  }
}

class Singleton {
  private instance!: BookServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new BookService(apiService);
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const bookService = singleton.getInstance();
Object.freeze(bookService);

export { bookService };
