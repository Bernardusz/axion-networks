import useAuth from "@/context/useAuth";
import { Outlet, Navigate } from "react-router-dom";

const PublicOnlyRoute = () => {
    const accessToken = useAuth(state => state.accessToken);
    return accessToken ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicOnlyRoute;
