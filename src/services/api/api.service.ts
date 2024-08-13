import axios, { AxiosInstance } from "axios";
import { ApiServiceInterface } from "./api.service.interface";

class ApiService implements ApiServiceInterface {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000",
    });
  }

  async post<T>(path: string, data: any): Promise<T> {
    const response = await this.api.post<T>(path, data);
    return response.data;
  }

  async get<T>(path: string): Promise<T> {
    const response = await this.api.get<T>(path);
    return response.data;
  }

  async put<T>(path: string, data: any): Promise<T> {
    const response = await this.api.put<T>(path, data);
    return response.data;
  }

  async patch<T>(path: string, data: any): Promise<T> {
    const response = await this.api.patch<T>(path);
    return response.data;
  }

  async delete<T>(path: string): Promise<T> {
    const response = await this.api.delete<T>(path);
    return response.data;
  }
}

class Singleton {
  private instance!: ApiServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new ApiService();
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const apiService = singleton.getInstance();
Object.freeze(apiService);

export { apiService };
