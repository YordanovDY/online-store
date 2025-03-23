import { useNavigate } from "react-router";
import { useUserContext } from "../../../contexts/UserContext";
import useFetchEvent from "../../../hooks/useFetchEvent";

export default function LogoutButton({ classProp }) {
    const { execute } = useFetchEvent('/auth/logout', {});
    const { clearUserData } = useUserContext();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            await execute();
            clearUserData();
            navigate('/');

        } catch (err) {
            console.error(err);
        }
    }
    return (
        <button className={classProp} onClick={logoutHandler}>
            <i className="fa-solid fa-right-from-bracket" />
            <span>
                Logout
            </span>
        </button>
    );
}