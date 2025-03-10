import { Link } from 'react-router';
import styles from './CartComponent.module.css';

export default function CartComponent() {
    return (
        <section className={styles['cart-section']}>
            <h2>My Cart</h2>
            <main className={styles['main']}>
                <article>
                    <ul className={styles['items-list']}>
                        <li className={styles['item']}>
                            <span>3x</span>
                            <img className={styles['item-image']} src="/images/no-image.png" alt="" />
                            <span>ASUS Tuf Gaming A15</span>
                            <span>3870.99$</span>
                        </li>
                        <li className={styles['item']}>
                            <span>2x</span>
                            <img className={styles['item-image']} src="/images/no-image.png" alt="" />
                            <span>ASUS Tuf Gaming A15</span>
                            <span>2580.99$</span>
                        </li>
                        <li className={styles['item']}>
                            <span>1x</span>
                            <img className={styles['item-image']} src="/images/no-image.png" alt="" />
                            <span>ASUS Tuf Gaming A15</span>
                            <span>1290.99$</span>
                        </li>
                    </ul>
                </article>
                <aside>
                    <ul className={styles['items-list']}>
                        <li className={styles['price-item']}>
                            <div className={styles['price-item-key']}>Price</div>
                            <div className={styles['price-item-value']}>7740.99$</div>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-item-key']}>Delivery</div>
                            <div className={styles['price-item-value']}>12.59$</div>
                        </li>
                        <li className={styles['price-item']}>
                            <div className={styles['price-item-key-bold']}>Total Price</div>
                            <div className={styles['price-item-value-bold']}>7753.58$</div>
                        </li>
                        <li><Link to="/purchase-confirmation" className="button btn-primary">Purchase</Link></li>
                    </ul>
                </aside>
            </main>
        </section>
    );
}