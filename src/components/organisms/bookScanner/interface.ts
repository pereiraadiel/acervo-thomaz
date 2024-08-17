import { useBookScanner } from "./hook";

export interface BookScannerProps {}

export interface BookScannerViewProps
  extends ReturnType<typeof useBookScanner> {}
