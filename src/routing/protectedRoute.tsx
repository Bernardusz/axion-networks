import useAuth from "@/context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { accessToken, isInitialized } = useAuth();

    if (!isInitialized) return null;
    if (!accessToken) return <Navigate to="/login" replace />;

    return <Outlet />;
};

export default ProtectedRoute;
