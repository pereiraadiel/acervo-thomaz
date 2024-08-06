import useCameraPermissions from "@/hooks/useCameraPermission.hook";
import useBarCode from "@/hooks/useBarCode.hook";
import useExternalBook from "@/hooks/useExternalBook.hook";

export interface BookScanInterface {
  camera: ReturnType<typeof useCameraPermissions>;
  barcode: ReturnType<typeof useBarCode>;
  book: ReturnType<typeof useExternalBook>;
}
