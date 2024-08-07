import { useState } from "react";
import { BarCodeScanningResult } from "expo-camera";
import useBook from "./useBook.hook";

const useBarCode = () => {
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState<{ type: string; data: string }>({
    type: "",
    data: "",
  });
  const { fetchBookInfoByIsbn } = useBook();

  const onScan = ({ type, data }: BarCodeScanningResult) => {
    setScanned(true);
    setResult({ type, data });
    fetchBookInfoByIsbn(data);
  };

  return {
    scanned,
    setScanned,
    result,
    onScan,
  };
};

export default useBarCode;
