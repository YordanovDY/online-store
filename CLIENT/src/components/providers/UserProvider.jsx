import { UserContext } from "../../contexts/UserContext";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import { useAuth } from "./authApi";

export function UserProvider({ children }) {
    const {pending, user, setUserData} = useAuth();

    return (
        <>
            {pending

                ? <div className="content d-flex f-direction-column gap-20">
                    <LoadingSpinner />
                </div>

                :
                <UserContext.Provider value={{ user, setUserData }}>
                    {children}
                </UserContext.Provider>
            }
        </>
    )
}