import { Camera } from "expo-camera";
import { useCallback, useEffect, useState } from "react";
import useToast from "./useToast.hook";
import { useFocusEffect } from "@react-navigation/native";

const useCameraPermissions = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [canAskAgain, setCanAskAgain] = useState<boolean | null>(null);
  const [isCameraOpened, setIsCameraOpened] = useState(false);
  const { addToast } = useToast();

  const requestPermissions = async () => {
    const { status, canAskAgain: initialCanAskAgain } =
      await Camera.getCameraPermissionsAsync();
    const isGranted = status === "granted";

    setHasPermission(isGranted);
    setCanAskAgain(initialCanAskAgain);

    if (isGranted) {
      setIsCameraOpened(true);
      return;
    }

    if (initialCanAskAgain) {
      addToast("Por favor permita o acesso a sua câmera", "info");

      const { status: newStatus, canAskAgain: newCanAskAgain } =
        await Camera.requestCameraPermissionsAsync();
      const isNewGranted = newStatus === "granted";

      setHasPermission(isNewGranted);
      setIsCameraOpened(isNewGranted);
      setCanAskAgain(newCanAskAgain);

      if (!isNewGranted && !newCanAskAgain) {
        addToast("O acesso a sua câmera foi negado!", "error");
      }
    } else {
      setHasPermission(false);
      addToast(
        "Por favor permita o acesso a sua câmera nas configurações do seu dispositivo.",
        "error"
      );
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      requestPermissions();
      return () => {
        setIsCameraOpened(false);
      };
    }, [])
  );

  const requestCamera = () => {
    if (hasPermission === true) {
      setIsCameraOpened(true);
    } else {
      requestPermissions();
    }
  };

  const dismissCamera = () => {
    setIsCameraOpened(false);
  };

  return {
    hasCameraPermission: hasPermission,
    isCameraOpened,
    canAskAgain,
    requestCamera,
    dismissCamera,
  };
};

export default useCameraPermissions;
