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

    const guestNav = <>
        <li>
            <div className={styles['sign-in-btn']}>
                <Link className="nav-btn" to="/auth/login">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>Login</span>
                </Link>

                <Link className="nav-btn" to="/auth/register">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>Register</span>
                </Link>
            </div>
        </li>
    </>

    const [navmenu, setNavMenu] = useState(guestNav);

    const logoutHandler = async () => {
        try {
            await execute();
            clearUserData();
            navigate('/');

        } catch (err) {
            console.error(err);
        }
    }

    const customerNav =
        <>
            <li className="relative">
                <button className={styles['logout-btn']} onClick={logoutHandler}>
                    <i className="fa-solid fa-right-from-bracket" />
                    <span>
                        Logout
                    </span>
                </button>

                <Link className="cart-btn" to="/profile/my-cart">
                    <i className="fa-solid fa-cart-shopping" />
                </Link>
            </li>
        </>

    const employeeNav = <>
        <li className="relative">
            <button className={styles['logout-btn']} onClick={logoutHandler}>
                <i className="fa-solid fa-right-from-bracket" />
                <span>
                    Logout
                </span>
            </button>

            <Link className="dash-btn" to="/dashboard">
                <i className="fa-solid fa-table-cells-large" />
            </Link>
        </li>
    </>

    useEffect(() => {
        if (user.isAuthenticated()) {
            const emailLabelStyle = [styles['email-label'], styles[ROLES[user.role].toLowerCase()]];
            setEmailLabel(<span className={emailLabelStyle.join(' ')}>{user.email}</span>);
        }

        if (!user.isAuthenticated()) {
            setNavMenu(guestNav);

            setEmailLabel('');
        }

        if (user.isCustomer()) {
            setNavMenu(customerNav);
        }

        if (user.isStoreManager() || user.isSupplier() || user.isAdmin()) {
            setNavMenu(employeeNav);
        }
    }, [user]);

    return {
        navmenu,
        emailLabel
    }
}