export interface RequestCameraMoleculeProps {
  canAskAgain: boolean | null;
  requestCamera: () => void;
}

export interface RequestCameraMoleculeViewProps
  extends RequestCameraMoleculeProps {}
