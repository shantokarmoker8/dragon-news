import { useContext } from "react";
import { AuthContex } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { FaDigg } from "react-icons/fa";
const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
