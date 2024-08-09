import { useEffect, useState } from "react";
import { LogoVariant } from "./interface";

const variantColors = {
  default: {
    top: "text-gray-100",
    bottom: "text-orange-500",
  },
  small: {
    top: "text-gray-100",
    bottom: "text-orange-500",
  },
};

const useLogoAtom = () => {
  const [variant, setVariant] = useState<LogoVariant>("default");
  const [color, setColor] = useState({
    top: "",
    bottom: "",
  });

  useEffect(() => {
    setColor(variantColors[variant]);
  }, [variant]);

  return {
    color,
    variant,
    setVariant,
  };
};

export { useLogoAtom };
