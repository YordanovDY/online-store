import { Link } from "react-router";
import Categories from "./categories/Categories";
import SearchForm from "./search-form/SearchForm";
import styles from './Header.module.css';

import { useHeaderNav } from "./headerApi";

export default function Header() {
    const { navmenu, emailLabel } = useHeaderNav();

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
            {emailLabel}

        </header>
    )
}