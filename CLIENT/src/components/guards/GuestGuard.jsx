import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function GuestGuard() {
    const { user } = useUserContext();

    if (user.isAuthenticated()) {
        return <Navigate to="/" />
    }

    return <Outlet />
}