export type ProgressVariant = "circle" | "default";

export interface ProgressAtomProps {
  variant?: ProgressVariant;
	progress?: number;
}

export interface ProgressAtomViewProps extends ProgressAtomProps {}
