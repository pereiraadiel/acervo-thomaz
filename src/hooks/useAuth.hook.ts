import { create } from "zustand";
import { AuthModel } from "@/models/auth.model";
import { authService } from "@/services/auth/auth.service";
import { UserModel } from "@/models/user.model";
import { useStorage } from "@/hooks/stores/useStorage.hook";

interface AuthState {
  auth: AuthModel | undefined;
  authenticate: (email: string, password: string) => void;
  refresh: (token: string) => void;
  register: (user: Omit<UserModel, "id">) => void;
  recover: (email: string) => void;
  reset: (email: string, token: string, password: string) => void;
  setAuth: (auth: AuthModel) => void;
  fetching: boolean;
  error: { [key: string]: string };
}

const useAuth = create<AuthState>((set) => {
  return {
    auth: undefined,

    authenticate: async (email: string, password: string) => {
      set({ fetching: true });
      try {
        const response = await authService.login(email, password);
        set({ auth: response });
      } catch (err: any) {
        if (err.response?.status === 401) {
          set({
            error: {
              email: "Usuário/email ou senha incorretos",
              password: "Usuário/email ou senha incorretos",
            },
          });
        }
        console.error(err);
      } finally {
        set({ fetching: false });
      }
    },

    refresh: async (token: string) => {
      set({ fetching: true });
      try {
        const response = await authService.refreshToken(token);
        set({ auth: response });
      } catch (err) {
        console.error(err);
      } finally {
        set({ fetching: false });
      }
    },

    register: async (user: Omit<UserModel, "id">) => {
      set({ fetching: true });
      try {
        await authService.register(user);
      } catch (err) {
        console.error(err);
      } finally {
        set({ fetching: false });
      }
    },

    recover: async (email: string) => {
      set({ fetching: true });
      try {
        await authService.recoverAccount(email);
      } catch (err) {
        console.error(err);
      } finally {
        set({ fetching: false });
      }
    },

    reset: async (email: string, token: string, password: string) => {
      set({ fetching: true });
      try {
        await authService.resetPassword(email, token, password);
      } catch (err) {
        console.error(err);
      } finally {
        set({ fetching: false });
      }
    },

    setAuth: (auth: AuthModel) => {
      set({ auth });
    },

    fetching: false,
    error: { email: "", password: "" },
  };
});

export default useAuth;
