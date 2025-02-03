import { Navigate } from "react-router-dom";
import AdminRoot from "./admin/Adminroot";

const PrivateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <AdminRoot /> : <Navigate to="/" />;
};

export default PrivateRoute;
