import { AuthModel } from "../../models/auth.model";
import { UserModel } from "../../models/user.model";

export interface AuthServiceInterface {
  login(email: string, password: string): Promise<AuthModel>;
  register(user: Omit<UserModel, "id">): Promise<boolean>;
  refreshToken(token: string): Promise<AuthModel>;
  recoverAccount(email: string): Promise<boolean>;
  resetPassword(
    email: string,
    token: string,
    password: string
  ): Promise<boolean>;
}
