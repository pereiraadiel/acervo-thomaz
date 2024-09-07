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
  | "reading-register"
  | "all";

export interface BadgeAtomProps {
  variant?: BadgeVariant;
  onPress?: () => void;
  isActive: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
}

export interface BadgeAtomViewProps extends TouchableOpacityProps {
  text: string;
  Icon: React.ReactElement;
  className?: string;
  size?: "small" | "medium" | "large";
  color: {
    text: string;
    background: string;
  };
}
