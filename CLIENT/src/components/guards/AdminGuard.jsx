import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function AdminGuard() {
    const { user } = useUserContext();

    if (user.isAdmin()) {
        return <Outlet />
    }

    return <Navigate to="/no-permissions" />
}