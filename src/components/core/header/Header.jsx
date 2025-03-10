import { Link } from "react-router";
import Categories from "./Categories";
import SearchForm from "./SearchForm";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="padding-30 coal-bg pale-blue-c">
            <nav>
                <ul className={styles['header-nav-ul']}>
                    <li>
                    <Link to="/" className="nav-btn">
                        Home
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

                    <li>
                        <Link className="nav-btn" to="/login">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <span>Login</span>
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}