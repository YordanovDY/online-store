import LoadingSpinner from '../shared/loading-spinner/LoadingSpinner';
import { useCart } from './cartApi';
import styles from './CartComponent.module.css';
import ItemsList from './items-list/ItemsList';
import Summary from './summary/Summary';

export default function CartComponent() {
    const { pending, items, totalPrice } = useCart();

    return (
        <>
            {
                pending
                    ? <LoadingSpinner />
                    : < section className={styles['cart-section']} >
                        <h2>My Cart</h2>
                        <main className={styles['main']}>
                            <ItemsList itemsArr={items} />
                            <Summary totalPrice={totalPrice} />
                        </main>
                    </section >
            }
        </>

    );
}