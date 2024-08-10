export type LogoVariant = "default" | "small";

export type LogoAtomProps  = {
  className?: string;
  variant?: LogoVariant;
};

export type LogoAtomViewProps = {
  className?: string;
  color: {
    top: string;
    bottom: string;
  };
  variant: LogoVariant;
};
