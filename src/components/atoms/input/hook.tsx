import { useEffect, useState } from "react";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import React from "react";

const variants = {
  password: <MaterialIcons name='password' size={20} color={colors.gray[500]} />,
  email: <MaterialIcons name="alternate-email" size={20} color={colors.gray[500]}/>,
  search: <Octicons name="search" size={20} color={colors.gray[500]}/>,
  username: <Octicons name="person" size={20} color={colors.gray[500]}/>,
  name: <Octicons name="person" size={20} color={colors.gray[500]}/>,
};

const useInputAtom = () => {
  const [variant, setVariant] = useState<keyof typeof variants>("name");
  const [error, setError] = useState<string>();
  const [color, setColor] = useState({
    border: 'border-gray-500',
    text: 'text-gray-500'
  });
  const [Icon, setIcon] = useState<React.ReactElement>(variants[variant]);

  useEffect(() => {
    if (error) {
      setColor({
        border: 'border-red-500',
        text: 'text-red-500'
      });
      setIcon(
        React.cloneElement(variants[variant], { color: colors.red[500] })
      );
    } else {
      setColor({
        border: 'border-gray-500',
        text: 'text-gray-500'
      });
      setIcon(
        React.cloneElement(variants[variant], { color: colors.gray[500] })
      );
    }
  }, [error]);

  return {
    variant,
    setVariant,
    error,
    setError,
    color,
    Icon,
  };
};

export { useInputAtom };