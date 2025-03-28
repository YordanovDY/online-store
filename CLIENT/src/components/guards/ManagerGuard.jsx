import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function ManagerGuard() {
    const { user } = useUserContext();

    if (user.isStoreManager() || user.isAdmin()) {
        return <Outlet />
    }

    return <Navigate to="/no-permissions" />
}