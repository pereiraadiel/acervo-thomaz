import { SearchApiServiceInterface } from "./search-api.service.interface";
import { BookModel } from "@/models/book.model";
import { GoogleBook } from "@/models/google-book.model";
import { googleBookToBooksMapper } from "@/mappers/google-book-to-book.mapper";
import { apiService } from "@/services/api/api.service";
import { ApiServiceInterface } from "@/services/api/api.service.interface";

class GoogleSearchApiService implements SearchApiServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async fetchBooks(term: string): Promise<BookModel[]> {
    if (term === "") return [];

    const googleBook = await this.apiService.get<GoogleBook>(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&hl=pt-BR&langRestrict=pt&printType=books&maxAllowedMaturityRating=not-mature`
    );
    
    if (!googleBook.items) return [];

    const books = googleBookToBooksMapper(googleBook);

    console.log("GoogleApiService · books:", books);
    return books;
  }
}

class Singleton {
  private instance!: SearchApiServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new GoogleSearchApiService(apiService);
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const searchApiService = singleton.getInstance();
Object.freeze(searchApiService);

export { searchApiService };
