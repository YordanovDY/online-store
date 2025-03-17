import { Link } from "react-router";
import Categories from "./categories/Categories";
import SearchForm from "./search-form/SearchForm";
import styles from './Header.module.css';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { auth, ROLES } from "../../../constants/roles";

export default function Header() {
    const { user } = useContext(UserContext);
    const [emailLabelStyle, setEmailLabelStyle] = useState(styles['email-label']);
    const [navmenu, setNavMenu] = useState(<li>
        <Link className="nav-btn" to="/login">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Login</span>
        </Link>
    </li>);

    useEffect(() => {
        if (!user) {
            return;
        }

        setEmailLabelStyle(state => state + ' ' + styles[ROLES[user.role].toLowerCase()]);

        if (auth.isCustomer(user.role)) {
            setNavMenu(<li>
                <Link className="cart-btn" to="/my-cart">
                    <i className="fa-solid fa-cart-shopping" />
                </Link>
            </li>)
        }

        if (auth.isStoreManager(user.role) || auth.isSupplier(user.role) || auth.isAdmin(user.role)) {
            setNavMenu(<li>
                <Link className="dash-btn" to="/dashboard">
                    <i className="fa-solid fa-table-cells-large" />
                </Link>
            </li>)
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
            {user && <span className={emailLabelStyle}>{user.email}</span>}

        </header>
    )
}