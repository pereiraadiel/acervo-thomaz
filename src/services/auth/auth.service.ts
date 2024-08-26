import { AuthModel } from "@/models/auth.model";
import { UserModel } from "@/models/user.model";
import { apiService } from "@/services/api/api.service";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { CacheService, cacheService } from "@/services/cache/cache.service";
import { AuthServiceInterface } from "./auth.service.interface";

export class AuthService implements AuthServiceInterface {
  constructor(
    private readonly apiService: ApiServiceInterface,
    private readonly cacheService: CacheService
  ) {}

  async login(email: string, password: string): Promise<AuthModel> {
    try {
      const auth = await this.apiService.post<AuthModel>("auth/sign/in", {
        email,
        password,
      });
      return auth;
    } catch (error) {
      throw error;
    }
  }

  async register(user: Omit<UserModel, "id">): Promise<boolean> {
    try {
      const auth = await this.apiService.post<AuthModel>("auth/sign/up", user);
      return !!auth;
    } catch (error) {
      console.error(error);
      throw new Error("Error on register");
    }
  }

  async refreshToken(token: string): Promise<AuthModel> {
    try {
      const auth = await this.apiService.post<AuthModel>("auth/sign/refresh", {
        refreshToken: token,
      });
      return auth;
    } catch (error) {
      console.error(error);
      throw new Error("Error on refresh token");
    }
  }

  async recoverAccount(email: string): Promise<boolean> {
    try {
      await this.apiService.post("auth/recover", { email });
      return true;
    } catch (error) {
      console.error(error);
      throw new Error("Error on recover account");
    }
  }

  async resetPassword(
    email: string,
    token: string,
    password: string
  ): Promise<boolean> {
    try {
      await this.apiService.post("auth/reset", { email, token, password });
      return true;
    } catch (error) {
      console.error(error);
      throw new Error("Error on reset password");
    }
  }
}

class Singleton {
  private instance!: AuthServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new AuthService(apiService, cacheService);
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const authService = singleton.getInstance();
Object.freeze(authService);

export { authService };
