import Categories from "./Categories";
import SearchForm from "./SearchForm";
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="padding-30 coal-bg pale-blue-c">
            <nav>
                <ul className={styles['header-nav-ul']}>
                    <Categories />
                    <SearchForm />

                    <li>
                        <a className="nav-btn" href="#">
                            <i className="fa-regular fa-address-card"></i>
                            <span>Contacts</span>
                        </a>
                    </li>

                    <li>
                        <a className="nav-btn" href="#">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <span>Login</span>
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}