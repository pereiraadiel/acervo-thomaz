import { UserModel } from "@/models/user.model";
import { apiService } from "@/services/api/api.service";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { CacheService, cacheService } from "@/services/cache/cache.service";
import { UserServiceInterface } from "./user.service.interface";

export class UserService implements UserServiceInterface {
  constructor(
    private readonly apiService: ApiServiceInterface,
    private readonly cacheService: CacheService
  ) {}

  async getMe() {
    try {
      const cachedUser = await this.cacheService.get<UserModel>("user");
      if (cachedUser) return cachedUser;

      const user = this.apiService
        .useAuthentication()
        .get<UserModel>(`users/me`);

      await this.cacheService.save("user", user);

      return user;
    } catch (error) {
      throw new Error("Error getting user");
    }
  }
}

class Singleton {
  private instance!: UserServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new UserService(apiService, cacheService);
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const userService = singleton.getInstance();
Object.freeze(userService);

export { userService };
