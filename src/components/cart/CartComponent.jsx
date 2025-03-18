import styles from './CartComponent.module.css';
import ItemsList from './items-list/ItemsList';
import Summary from './summary/Summary';

export default function CartComponent() {
    return (
        <section className={styles['cart-section']}>
            <h2>My Cart</h2>
            <main className={styles['main']}>
                <ItemsList />
                <Summary />
            </main>
        </section>
    );
}