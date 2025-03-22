import { Link } from "react-router";
import styles from "./ContactDetails.module.css"

export default function ContactDetails({ contacts }) {
    if (!contacts.email || !contacts.fullName || !contacts.phoneNumber || !contacts.address) {
        return (
            <div className={styles['no-data']}>
                <Link to="/user/add-contact-info" className="button btn-primary">Fill Contact Information</Link>
            </div>
        )
    }

    return (
        <ul className={styles['items-list']}>
            <li className={styles['item']}>
                Full Name: {contacts.fullName}
            </li>
            <li className={styles['item']}>
                Email: {contacts.email}
            </li>
            <li className={styles['item']}>
                Phone Number: {contacts.phoneNumber}
            </li>
            <li className={styles['item']}>
                Address: {contacts.address}
            </li>
        </ul>
    );
}