import { BookServiceInterface } from "./book.service.interface";
import { BookModel, BookStatus } from "@/models/book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";
import { storage } from "@/hooks/stores/useStorage.hook";
import { AuthModel } from "@/models/auth.model";

class BookService implements BookServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async getAllMyBooks(): Promise<BookModel[]> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        return [];
      }
      const books = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel[]>(`books`);

      console.log("BookService · getAllMyBooks", books);

      return books.map((book) => {
        let imageUrl = book.imageUrl || "";

        if (imageUrl.includes("http://")) {
          imageUrl = imageUrl.replace("http://", "https://");
        }

        return { ...book, imageUrl };
      });
    } catch (error: any) {
      console.error("book.service: ", Object.keys(error), error.request);
      throw new Error("Oops!! Ocorreu uma falha ao buscar seus livros.");
    }
  }

  async getById(id: string): Promise<BookModel> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const book = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel>(`books?id=${id}`);

      let imageUrl = book.imageUrl || "";

      if (imageUrl.includes("zoom=")) {
        imageUrl = imageUrl.replace(/zoom=\d*/, "zoom=6");
      }
      if (imageUrl.includes("http://")) {
        imageUrl = imageUrl.replace("http://", "https://");
      }

      console.log("BookService · getById", book);

      return { ...book, imageUrl };
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async getByIsbn(isbn: string): Promise<BookModel> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const book = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel>(`books?isbn=${isbn}`);

      let imageUrl = book.imageUrl || "";

      if (imageUrl.includes("zoom=")) {
        imageUrl = imageUrl.replace(/zoom=\d*/, "zoom=6");
      }

      console.log("BookService · getByIsbn", book);

      return { ...book, imageUrl };
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async search(
    query: string,
    status: BookStatus = "unknown"
  ): Promise<BookModel[]> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const book = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel[]>(`books/search?term=${query}&status=${status}`);

      console.log("BookService · search", book);

      return book;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async changeStatus(id: string, status: BookStatus): Promise<void> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      await this.apiService
        .useAuthentication(auth.accessToken)
        .patch(`books?id=${id}`, { status });

      console.log("BookService · changeStatus");

      return;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao alterar status do livro.");
    }
  }

  async readingRegister(id: string, value: number): Promise<void> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      await this.apiService
        .useAuthentication(auth.accessToken)
        .patch(`books?id=${id}`, { readedPageCount: value });

      console.log("BookService · readingRegister");

      return;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao alterar status do livro.");
    }
  }

  async createNote(
    bookId: string,
    content: string
  ): Promise<{ bookId: string; content: string }> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const note = await this.apiService
        .useAuthentication(auth.accessToken)
        .post<{ bookId: string; content: string }>(
          `books/notes?bookId=${bookId}`,
          {
            content,
          }
        );

      console.log("BookService · createNote", note);

      return note;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao criar anotação.");
    }
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
