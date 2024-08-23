import { TextInputProps } from "react-native";

export type InputAtomType = "search" | "multiline" | "numeric";
export interface InputAtomProps extends TextInputProps {
  type: InputAtomType;
  onSubmit?: () => void;
  error?: string;
}

export interface InputAtomViewProps extends InputAtomProps {}
