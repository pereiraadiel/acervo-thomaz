import { TextInput } from "react-native";

export type LabeledInputVariant =
  | "password"
  | "email"
  | "search"
  | "username"
  | "name";

export interface LabeledInputAtomProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
  error?: string;
  variant?: LabeledInputVariant;
}

export interface LabeledInputAtomViewProps {
  className?: string;
  label: string;
  error?: string;
  Icon: React.ReactElement;
  color: {
    border: string;
    text: string;
  };
}
