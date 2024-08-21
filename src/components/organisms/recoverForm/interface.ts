export interface RecoverFormOrganismProps {}

export type RecoverFormFields = {
  email: string;
  reset?: ResetPassworFormFields;
};

export type ResetPassworFormFields = {
  code: string;
  password: string;
};

export type RecoverError = RecoverFormFields;

export interface RecoverFormOrganismViewProps {
  handleResetPassword: () => void;
  handleRecoverAccount: () => void;
  handleSignIn: () => void;
  formFields: RecoverFormFields;
  setFormFields: (fields: RecoverFormFields) => void;
  error: RecoverError;
  currentStep: 0 | 1;
  loading: boolean;
}
