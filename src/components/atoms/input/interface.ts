import { TextInputProps } from "react-native";

export type InputAtomType = "search" | "multiline";
export interface InputAtomProps extends TextInputProps {
  type: InputAtomType;
  onSubmit?: () => void;
}

export interface InputAtomViewProps extends InputAtomProps {
}
