import { TextInput } from "react-native";

export type InputVariant =
  | "password"
  | "email"
  | "search"
  | "username"
  | "name";

export interface InputAtomProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
	error?: string;
  variant?: InputVariant;
}

export interface InputAtomViewProps {
  className?: string;
  label: string;
	error?: string;
  Icon: React.ReactElement;
  color: {
    border: string;
    text: string;
  };
}
