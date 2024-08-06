import { ExternalBookModel } from "@/models/external-book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";
import { IsbnApiServiceInterface } from "./isbn-api.service.interface";

class IsbnApiService implements IsbnApiServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async getBookInfoByIsbn(isbn: string): Promise<ExternalBookModel> {
    if (isbn === "") return {} as ExternalBookModel;
    // const response = apiService.get(
    //   `https://brasilapi.com.br/api/isbn/v1/${isbn}`
    // );
    const response = await apiService.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
    );
    console.log("resposta: ", response);
    return response;
  }
}

class Singleton {
  private instance!: IsbnApiServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new IsbnApiService(apiService);
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
