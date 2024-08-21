export interface RegisterFormOrganismProps {}

export type RegisterFormFields = {
  email: string;
  password: string;
  username: string;
  fullname: string;
};

export type RegisterError = RegisterFormFields;

export interface RegisterFormOrganismProps {
  isEditable?: boolean;
  editingExisting?: boolean;
}

export interface RegisterFormOrganismViewProps {
  handleResetPassword: () => void;
  handleSignUp: () => void;
  handleSignIn: () => void;
  isEditable: boolean;
  editingExisting: boolean;
  formFields: RegisterFormFields;
  setFormFields: (fields: RegisterFormFields) => void;
  error: RegisterError;
  loading: boolean;
}
