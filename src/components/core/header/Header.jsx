import { Link } from "react-router";
import Categories from "./categories/Categories";
import SearchForm from "./search-form/SearchForm";
import styles from './Header.module.css';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import ROLES from "../../../constants/roles";

export default function Header() {
    const { user } = useContext(UserContext);
    const [emailLabelStyle, setEmailLabelStyle] = useState(styles['email-label']);

    useEffect(() => {
        if (!user) {
            return;
        }

        setEmailLabelStyle(state => state + ' ' + styles[ROLES[user.result.user.role].toLowerCase()]);
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

                    {user
                        ? <li>
                            <Link className="cart-btn" to="/my-cart">
                                <i className="fa-solid fa-cart-shopping" />
                            </Link>
                        </li>

                        : <li>
                            <Link className="nav-btn" to="/login">
                                <i className="fa-solid fa-right-to-bracket"></i>
                                <span>Login</span>
                            </Link>
                        </li>
                    }

                </ul>
            </nav>
            {user && <span className={emailLabelStyle}>{user.result.user.email}</span>}

        </header>
    )
}