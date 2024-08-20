import { useEffect, useState } from "react";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import React from "react";
import { LabeledInputVariant } from "./interface";

const variants = {
  password: <MaterialIcons name='password' size={20} color={colors.gray[500]} />,
  email: <MaterialIcons name="alternate-email" size={20} color={colors.gray[500]}/>,
  search: <Octicons name="search" size={20} color={colors.gray[500]}/>,
  username: <Octicons name="person" size={20} color={colors.gray[500]}/>,
  name: <Octicons name="person" size={20} color={colors.gray[500]}/>,
};

const useLabeledInputAtom = (variant: LabeledInputVariant) => {
  const [error, setError] = useState<string>();
  const [color, setColor] = useState({
    border: 'border-gray-800',
    text: 'text-gray-800'
  });

  const [Icon, setIcon] = useState<React.ReactElement>(variants[variant]);

  useEffect(() => {
    if (error) {
      setColor({
        border: 'border-red-600',
        text: 'text-red-600'
      });
      setIcon(
        React.cloneElement(variants[variant], { color: colors.red[600] })
      );
    } else {
      setColor({
        border: 'border-gray-800',
        text: 'text-gray-800'
      });
      setIcon(
        React.cloneElement(variants[variant], { color: colors.gray[800] })
      );
    }
  }, [error]);

  return {
    error,
    setError,
    color,
    Icon,
  };
};

export { useLabeledInputAtom };