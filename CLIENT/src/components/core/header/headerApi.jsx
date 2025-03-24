import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { Link } from "react-router";
import styles from './Header.module.css';
import { ROLES } from "../../../constants/roles";
import LogoutButton from "../../shared/logout-button/LogoutButton";

export function useHeaderNav() {
    const { user } = useUserContext();
    const [emailLabel, setEmailLabel] = useState('');

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

    const customerNav =
        <>
            <li className="relative">
                <LogoutButton classProp={styles['logout-btn']} />

                <Link className="cart-btn" to="/profile/my-cart">
                    <i className="fa-solid fa-cart-shopping" />
                </Link>
            </li>
        </>

    const employeeNav = <>
        <li className="relative">
            <LogoutButton classProp={styles['logout-btn']} />

            <Link className="dash-btn" to="/dashboard">
                <i className="fa-solid fa-table-cells-large" />
            </Link>
        </li>
    </>

    useEffect(() => {
        if (user.isAuthenticated()) {
            const emailLabelStyle = [styles['email-label'], styles[ROLES[user.role].toLowerCase()]];
            setEmailLabel(<Link to="/profile" className={emailLabelStyle.join(' ')}>{user.email}</Link>);
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