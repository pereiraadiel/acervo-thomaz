import { UserModel } from "@/models/user.model";

export interface UserServiceInterface {
	getMe: () => Promise<UserModel>;
}