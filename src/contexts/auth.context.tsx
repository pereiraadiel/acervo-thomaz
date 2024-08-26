import { createContext, useEffect, useState } from "react";
import { AuthModel } from "@/models/auth.model";
import { authService } from "@/services/auth/auth.service";
import { UserModel } from "../models/user.model";

const AuthContext = createContext<AuthContextType[]>([]);
const Provider = AuthContext.Provider;
interface AuthContextType {
  auth: AuthModel | undefined;
  authenticate: (email: string, password: string) => void;
	refresh: (token: string) => void;
	register: (user: Omit<UserModel, 'id'>) => void;
	recover: (email: string) => void;
	reset: (email: string, token: string, password: string) => void;
  setAuth: (auth: AuthModel) => void;
  fetching: boolean;
	error: {[key: string]: string};
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthModel>();
	const [error, setError] = useState<{[key: string]: string}>({'email': '', 'password': ''});
  const [fetching, setFetching] = useState(false);

  const authenticate = async (email: string, password: string) => {
    setFetching(true);
    authService
    .login(email, password)
    .then(response => {
      console.log('response auth', response)
      setAuth(response);
    })
    .catch((err) => {
			if(err.response.status === 401) {
				setError({ ...error, email: 'Usuário/email ou senha incorretos', password: 'Usuário/email ou senha incorretos' });
			};
      console.error(err);
		})
    .finally(() => setFetching(false));
  };
  
	const refresh = async (token: string) => {
    setFetching(true);
    authService
    .refreshToken(token)
    .then(setAuth)
    .catch((err) => console.error(err))
    .finally(() => setFetching(false));
  };
  
	const register = async (user: Omit<UserModel, 'id'>) => {
    setFetching(true);
    authService
    .register(user)
    .catch((err) => console.error(err))
    .finally(() => setFetching(false));
  };

	const recover = async (email: string) => {
		setFetching(true);
		authService
		.recoverAccount(email)
		.catch((err) => console.error(err))
		.finally(() => setFetching(false));
	};

	const reset = async (email: string, token: string, password: string) => {
		setFetching(true);
		authService
		.resetPassword(email, token, password)
		.catch((err) => console.error(err))
		.finally(() => setFetching(false));
	}


  const [authContext, setAuthContext] = useState<AuthContextType>({
    auth,
    authenticate,
		refresh,
		register,
		recover,
		reset,
    setAuth,
		error,
    fetching,
  });

  useEffect(() => {
    setAuthContext({
      auth,
      authenticate,
			refresh,
			register,
			recover,
			reset,
      setAuth,
			error,
      fetching,
    });
  }, [auth, fetching]);
  
   return <Provider value={[authContext]}>{children}</Provider>;
};

export {
  AuthProvider, 
  AuthContext
}