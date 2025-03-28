import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function AuthGuard() {
    const { user } = useUserContext();

    if (!user.isAuthenticated()) {
        return <Navigate to="/auth/login" />
    }

    return <Outlet />
}