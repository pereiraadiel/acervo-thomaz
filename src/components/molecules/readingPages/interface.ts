export interface ReadingPagesMoleculeProps {
  onSubmit: (value: number) => void;
  maxPages: number;
}

export interface ReadingPagesMoleculeViewProps
  extends ReadingPagesMoleculeProps {
  inputValue: string;
  error: string;
  onChangeValue: (value: string) => void;
  onButtonPress: () => void;
}
