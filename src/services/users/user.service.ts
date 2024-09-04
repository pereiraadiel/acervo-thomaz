import { UserModel } from "@/models/user.model";
import { apiService } from "@/services/api/api.service";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { UserServiceInterface } from "./user.service.interface";

export class UserService implements UserServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async getMe() {
    try {
      const user = await this.apiService
        .useAuthentication("")
        .get<UserModel>(`users`);

      console.log("UserService · getMe", user);

      return user;
    } catch (error) {
      console.error("user.service: ", error);
      throw new Error("Error getting user");
    }
  }
}

class Singleton {
  private instance!: UserServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new UserService(apiService);
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
