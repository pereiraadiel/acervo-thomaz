export interface RegisterFormOrganismProps {}

export type RegisterFormFields = {
  email: string;
  password: string;
  username: string;
  fullname: string;
};

export type RegisterError = RegisterFormFields;

export interface RegisterFormOrganismViewProps {
  handleResetPassword: () => void;
  handleSignUp: () => void;
  handleSignIn: () => void;
  formFields: RegisterFormFields;
  setFormFields: (fields: RegisterFormFields) => void;
  error: RegisterError;
  loading: boolean;
}
