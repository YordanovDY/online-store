import { Link, useNavigate } from "react-router";
import Categories from "./categories/Categories";
import SearchForm from "./search-form/SearchForm";
import styles from './Header.module.css';
import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { ROLES } from "../../../constants/roles";
import useFetchEvent from "../../../hooks/useFetchEvent";

export default function Header() {
    const { user } = useUserContext();
    const [emailLabelStyle, setEmailLabelStyle] = useState(styles['email-label']);
    const { execute } = useFetchEvent('/auth/logout', {});
    const { clearUserData } = useUserContext();
    const navigate = useNavigate();

    const [navmenu, setNavMenu] = useState(<li>
        <Link className="nav-btn" to="/login">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Login</span>
        </Link>
    </li>);

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
            setEmailLabelStyle(state => state + ' ' + styles[ROLES[user.role].toLowerCase()]);
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

    return (
        <header className="padding-30 coal-bg pale-blue-c relative">
            <nav>
                <ul className={styles['header-nav-ul']}>
                    <li>
                        <Link to="/" className="nav-btn">
                            <i className="fa-solid fa-house" />
                            <span>Home</span>
                        </Link>

                    </li>

                    <Categories />
                    <SearchForm />

                    <li>
                        <a className="nav-btn" href="#">
                            <i className="fa-regular fa-address-card"></i>
                            <span>Contacts</span>
                        </a>
                    </li>

                    {navmenu}

                </ul>
            </nav>
            {user.isAuthenticated() && <span className={emailLabelStyle}>{user.email}</span>}

        </header>
    )
}