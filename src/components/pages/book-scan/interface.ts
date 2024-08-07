import useCameraPermissions from "@/hooks/useCameraPermission.hook";
import useBarCode from "@/hooks/useBarCode.hook";
import useBook from "@/hooks/useBook.hook";

export interface BookScanInterface {
  camera: ReturnType<typeof useCameraPermissions>;
  barcode: ReturnType<typeof useBarCode>;
  book: ReturnType<typeof useBook>;
}
