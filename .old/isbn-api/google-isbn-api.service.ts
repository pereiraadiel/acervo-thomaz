import { googleBookToBookMapper } from "@/mappers/google-book-to-book.mapper";
import { BookModel } from "@/models/book.model";
import { GoogleBook } from "@/models/google-book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";
import { IsbnApiServiceInterface } from "./isbn-api.service.interface";

class GoogleIsbnApiService implements IsbnApiServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async getBookInfoByIsbn(isbn: string): Promise<BookModel> {
    if (isbn === "") return {} as BookModel;
    //   `https://brasilapi.com.br/api/isbn/v1/${isbn}`
    const googleBook = await apiService.get<GoogleBook>(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
    );
    return googleBookToBookMapper(googleBook);
  }
}

class Singleton {
  private instance!: IsbnApiServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new GoogleIsbnApiService(apiService);
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const isbnApiService = singleton.getInstance();
Object.freeze(isbnApiService);

export { isbnApiService };
