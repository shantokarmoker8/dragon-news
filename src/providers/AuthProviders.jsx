import PropTypes from "prop-types";
import { createContext } from "react";
export const AuthContex = createContext(null);
const AuthProviders = ({ children }) => {
  return <AuthContex.Provider>{children}</AuthContex.Provider>;
};
AuthProviders.propTypes = {
  children: PropTypes.object,
};
export default AuthProviders;
