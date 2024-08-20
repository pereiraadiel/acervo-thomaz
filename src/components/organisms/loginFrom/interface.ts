export interface LoginFormOrganismProps {}

type LoginError = {
  email: string;
  password: string;
};

export interface LoginFormOrganismViewProps {
  handleResetPassword: () => void;
  handleSignUp: () => void;
	handleSignIn: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  error: LoginError;
  loading: boolean;
}
