import { Camera } from "expo-camera";
import { useEffect, useState } from "react";

const useCameraPermissions = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return {
    hasCameraPermission: hasPermission,
  };
};

export default useCameraPermissions;
