import { Link } from 'react-router';
import styles from '../CartComponent.module.css';

export default function Summary({ totalPrice }) {
    return (
        <aside>
            <ul className={styles['items-list']}>
                <li className={styles['price-item']}>
                    <div className={styles['price-item-key-bold']}>Total Price</div>
                    <div className={styles['price-item-value-bold']}>{totalPrice}$</div>
                </li>
                <li><Link to="/purchase-confirmation" className="button btn-primary">Purchase</Link></li>
            </ul>
        </aside>
    );
}