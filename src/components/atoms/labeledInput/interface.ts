import { KeyboardTypeOptions, TextInput } from "react-native";

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
  ref?: React.RefObject<TextInput>;
}

export interface LabeledInputAtomViewProps {
  className?: string;
  label: string;
  error?: string;
  Icon: React.ReactElement;
  keyboardType: KeyboardTypeOptions;
  variant?: LabeledInputVariant;
  ref?: React.RefObject<TextInput>;
  onFocus?: () => void;
  color: {
    border: string;
    text: string;
  };
}
