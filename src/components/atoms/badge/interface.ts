import React from "react";
import { TouchableOpacityProps } from "react-native";

export type BadgeVariant =
  | "search"
  | "readed"
  | "not-readed"
  | "reading"
  | "abandoned"
  | "desired"
  | "scan-barcode"
  | "save"
  | "reading-register";

export interface BadgeAtomProps {
  variant?: BadgeVariant;
  onPress?: () => void;
  isActive: boolean;
  className?: string;
}

export interface BadgeAtomViewProps extends TouchableOpacityProps {
  text: string;
  Icon: React.ReactElement;
  className?: string;
  color: {
    text: string;
    background: string;
  };
}
