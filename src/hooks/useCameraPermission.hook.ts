import { Camera } from "expo-camera";
import { useEffect, useState } from "react";

const useCameraPermissions = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraOpened, setIsCameraOpened] = useState(false);

  const requestPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
    setIsCameraOpened(status === "granted");
  };

  useEffect(() => {
    (async () => {
      requestPermissions();
    })();
  }, []);

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
    requestCamera,
    dismissCamera,
  };
};

export default useCameraPermissions;
