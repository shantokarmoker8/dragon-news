import { createContext } from "react";

const AuthProviders = () => {
  export const AuthContex = createContext(null);
  return <AuthContex.Provider></AuthContex.Provider>;
};

export default AuthProviders;
