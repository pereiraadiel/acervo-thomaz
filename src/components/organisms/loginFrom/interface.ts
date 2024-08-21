export interface LoginFormOrganismProps {}

export type LoginFormFields = {
  email: string;
  password: string;
};

export type LoginError = LoginFormFields;

export interface LoginFormOrganismViewProps {
  handleResetPassword: () => void;
  handleSignUp: () => void;
  handleSignIn: () => void;
  formFields: LoginFormFields;
  setFormFields: (fields: LoginFormFields) => void;
  error: LoginError;
  loading: boolean;
}
