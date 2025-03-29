import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { Link } from "react-router";
import styles from './Header.module.css';
import { ROLES } from "../../../constants/roles";
import GuestNav from "./user-navs/GuestNav";
import CustomerNav from "./user-navs/CustomerNav";
import EmployeeNav from "./user-navs/EmployeeNav";

export function useHeaderNav() {
    const { user } = useUserContext();
    const [emailLabel, setEmailLabel] = useState('');

    const [navmenu, setNavMenu] = useState(<GuestNav />);


    useEffect(() => {
        if (user.isAuthenticated()) {
            const emailLabelStyle = [styles['email-label'], styles[ROLES[user.role].toLowerCase()]];
            setEmailLabel(<Link to="/profile" className={emailLabelStyle.join(' ')}>{user.email}</Link>);
        }

        if (!user.isAuthenticated()) {
            setNavMenu(<GuestNav />);

            setEmailLabel('');
        }

        if (user.isCustomer()) {
            setNavMenu(<CustomerNav />);
        }

        if (user.isStoreManager() || user.isSupplier() || user.isAdmin()) {
            setNavMenu(<EmployeeNav />);
        }
    }, [user]);

    return {
        navmenu,
        emailLabel
    }
}