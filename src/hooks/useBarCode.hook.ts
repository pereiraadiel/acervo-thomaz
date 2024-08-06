import { useState } from "react";
import { BarCodeScanningResult } from "expo-camera";

const useBarCode = () => {
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState<{ type: string; data: string }>({
    type: "",
    data: "",
  });

  const onScan = ({ type, data }: BarCodeScanningResult) => {
    setScanned(true);
    setResult({ type, data });
  };

  return {
    scanned,
    setScanned,
    result,
    onScan,
  };
};

export default useBarCode;
