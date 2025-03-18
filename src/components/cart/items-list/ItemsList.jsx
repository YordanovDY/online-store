import styles from '../CartComponent.module.css';
import CartItem from './cart-item/CartItem';

export default function ItemsList({ itemsArr }) {
    return (
        <article>
            <ul className={styles['items-list']}>
                {itemsArr.map(item =>
                    <CartItem
                        key={item.product._id}
                        name={item.product.name}
                        price={item.product.price}
                        imageUrl={item.product.imageUrl}
                        quantity={item.quantity}
                    />
                )}
            </ul>
        </article>
    );
}