import { useContext } from "react";
import { AuthContext } from "@/contexts/auth.context";

const useAuth = () => {
  const [methods] = useContext(AuthContext);

  return methods;
};

export default useAuth;
