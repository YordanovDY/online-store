import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function EmployeeGuard() {
    const { user } = useUserContext();

    if (user.isCustomer()) {
        return <Navigate to="/no-permissions" />
    }

    return <Outlet />
}