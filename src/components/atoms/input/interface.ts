import { TextInputProps } from "react-native";

export type InputAtomType = "search" | "multiline";
export interface InputAtomProps extends TextInputProps {
  type: InputAtomType;
}

export interface InputAtomViewProps extends InputAtomProps {}
