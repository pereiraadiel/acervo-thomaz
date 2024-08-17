import { TouchableOpacityProps } from "react-native";

export interface ButtonAtomProps extends TouchableOpacityProps {
  title: string;
  variant?: "filled" | "outlined";
  className?: string;
}

export interface ButtonAtomViewProps extends ButtonAtomProps {}
