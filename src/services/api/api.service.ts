import axios, { AxiosInstance } from "axios";
import { ApiServiceInterface } from "./api.service.interface";
import { storage } from "@/hooks/stores/useStorage.hook";
import { AuthModel } from "@/models/auth.model";

const isJWT = (value: string) => {
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  return true;
};
class ApiService implements ApiServiceInterface {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      // baseURL: "https://thz.adiel.dev/api",
      baseURL: "https://thz.up.railway.app",
    });
  }

  useAuthentication(accessToken: string) {
    let token = accessToken;
    storage
      .get<AuthModel>("auth")
      .then((auth) => {
        console.log("ApiService · auth", auth);
        if (auth) {
          token = auth.accessToken;
        }
      })
      .catch((error) => {
        console.error("book.service: ", error);
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      });
    if (accessToken === "") {
      throw new Error(
        "Invalid invocation of useAuthentication · accessToken must be provided!"
      );
    }
    if (!isJWT(accessToken)) {
      throw new Error(
        "Invalid invocation of useAuthentication · accessToken must be an JWT"
      );
    }
    this.api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return this;
  }

  async post<T>(path: string, data: any): Promise<T> {
    try {
      const response = await this.api.post<T>(path, data);
      return response.data;
    } catch (error: any) {
      console.error("ApiService · post", {
        path,
        data,
        error: error.response.data,
      });
      throw error;
    }
  }

  async get<T>(path: string): Promise<T> {
    try {
      const response = await this.api.get<T>(path);
      return response.data;
    } catch (error: any) {
      console.error("ApiService · get", { path, error: error.response.data });
      throw error;
    }
  }

  async put<T>(path: string, data: any): Promise<T> {
    try {
      const response = await this.api.put<T>(path, data);
      return response.data;
    } catch (error: any) {
      console.error("ApiService · put", {
        path,
        data,
        error: error.response.data,
      });
      throw error;
    }
  }

  async patch<T>(path: string, data: any): Promise<T> {
    try {
      const response = await this.api.patch<T>(path, data);
      return response.data;
    } catch (error: any) {
      console.error("ApiService · patch", {
        path,
        data,
        error: error.response.data,
      });
      throw error;
    }
  }

  async delete<T>(path: string): Promise<T> {
    try {
      const response = await this.api.delete<T>(path);
      return response.data;
    } catch (error: any) {
      console.error("ApiService · delete", {
        path,
        error: error.response.data,
      });
      throw error;
    }
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
