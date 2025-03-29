import { Link } from "react-router";
import LogoutButton from "../../../shared/logout-button/LogoutButton";
import styles from '../Header.module.css';

export default function EmployeeNav() {
    return (
        <>
            <li className="relative">
                <LogoutButton classProp={styles['logout-btn']} />

                <Link className="dash-btn" to="/dashboard">
                    <i className="fa-solid fa-table-cells-large" />
                </Link>
            </li>
        </>
    );
}