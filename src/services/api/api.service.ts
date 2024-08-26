import axios, { AxiosInstance } from "axios";
import { ApiServiceInterface } from "./api.service.interface";
import { CacheService } from "@/services/cache/cache.service";

class ApiService implements ApiServiceInterface {
  private readonly api: AxiosInstance;
  private accessToken: string | null = null;
  private readonly cacheService: CacheService;

  constructor() {
    this.api = axios.create({
      baseURL: "https://adiel.dev/api",
    });
    this.cacheService = new CacheService();

    this.cacheService.get<string>("accessToken").then((accessToken) => {
      this.accessToken = accessToken;
    });
  }

  useAuthentication() {
    this.api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.accessToken}`;
    return this;
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
