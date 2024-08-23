export interface ReadingPagesMoleculeProps {
  onSubmit: () => void;
  maxPages: number;
}

export interface ReadingPagesMoleculeViewProps
  extends ReadingPagesMoleculeProps {
  inputValue: string;
  error: string;
  onChangeValue: (value: string) => void;
  onButtonPress: () => void;
}
