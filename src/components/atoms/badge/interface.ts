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
  | "save";

export interface BadgeAtomProps {
  variant?: BadgeVariant;
  onPress?: () => void;
  isActive: boolean;
}

export interface BadgeAtomViewProps extends TouchableOpacityProps {
  text: string;
  Icon: React.ReactElement;
  color: {
    text: string;
    background: string;
  };
}
