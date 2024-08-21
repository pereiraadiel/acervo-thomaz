import { KeyboardTypeOptions, TextInput } from "react-native";

export type LabeledInputVariant =
  | "password"
  | "email"
  | "search"
  | "username"
  | "name"
  | "code";

export interface LabeledInputAtomProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
  error?: string;
  className?: string;
  variant?: LabeledInputVariant;
  onFocus?: () => void;
  ref?: React.RefObject<TextInput>;
}

export interface LabeledInputAtomViewProps extends LabeledInputAtomProps {
  label: string;
  Icon: React.ReactElement;
  keyboardType: KeyboardTypeOptions;
  color: {
    border: string;
    text: string;
  };
}
