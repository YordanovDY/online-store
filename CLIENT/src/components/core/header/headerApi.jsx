import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import useFetchEvent from "../../../hooks/useFetchEvent";
import { Link, useNavigate } from "react-router";
import styles from './Header.module.css';
import { ROLES } from "../../../constants/roles";

export function useHeaderNav() {
    const { user } = useUserContext();
    const { execute } = useFetchEvent('/auth/logout', {});
    const { clearUserData } = useUserContext();
    const [emailLabel, setEmailLabel] = useState('');
    const navigate = useNavigate();

    const [navmenu, setNavMenu] = useState(
        <li>
            <Link className="nav-btn" to="/login">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Login</span>
            </Link>
        </li>
    );

    const logoutHandler = async () => {
        try {
            await execute();
            clearUserData();
            navigate('/');

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (user.isAuthenticated()) {
            const emailLabelStyle = [styles['email-label'], styles[ROLES[user.role].toLowerCase()]];
            setEmailLabel(<span className={emailLabelStyle.join(' ')}>{user.email}</span>);
        }

        if (!user.isAuthenticated()) {
            setNavMenu(
                <li>
                    <Link className="nav-btn" to="/login">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <span>Login</span>
                    </Link>
                </li>
            );

            setEmailLabel('');
        }

        if (user.isCustomer()) {
            setNavMenu(
                <>
                    <li>
                        <Link className="cart-btn" to="/my-cart">
                            <i className="fa-solid fa-cart-shopping" />
                        </Link>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={logoutHandler}>
                            Logout
                        </button>
                    </li>
                </>
            )
        }

        if (user.isStoreManager() || user.isSupplier() || user.isAdmin()) {
            setNavMenu(
                <>
                    <li>
                        <Link className="dash-btn" to="/dashboard">
                            <i className="fa-solid fa-table-cells-large" />
                        </Link>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={logoutHandler}>
                            Logout
                        </button>
                    </li>
                </>
            )
        }
    }, [user]);

    return {
        navmenu,
        emailLabel
    }
}