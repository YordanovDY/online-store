import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function SupplierGuard() {
    const { user } = useUserContext();

    if (user.isSupplier() || user.isAdmin()) {
        return <Outlet />
    }

    return <Navigate to="/no-permissions" />
}