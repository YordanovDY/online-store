import { Link } from 'react-router';
import styles from '../CartComponent.module.css';
// import { MemoryRouter } from 'react-router';

export default function Summary({ totalPrice }) {
    const convertedTotalPrice = Number(totalPrice);

    let purchaseBtn = '';
    let labelPrice = 0;

    if (convertedTotalPrice > 0 && !Number.isNaN(convertedTotalPrice)) {
        purchaseBtn = <li><Link to="/orders/place-order" className="button btn-primary">Purchase</Link></li>
        labelPrice = convertedTotalPrice;
    }

    return (
        <>
            {/* <MemoryRouter> */}
            < aside >
                <ul className={styles['items-list']}>
                    <li className={styles['price-item']}>
                        <div className={styles['price-item-key-bold']}>Total Price</div>
                        <div className={styles['price-item-value-bold']}>{labelPrice.toFixed(2)}$</div>
                    </li>
                    {purchaseBtn}
                </ul>
            </aside >
            {/* </MemoryRouter> */}
        </>
    );
}