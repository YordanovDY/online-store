import { useEffect, useState } from 'react';
import styles from '../CartComponent.module.css';
import CartItem from './cart-item/CartItem';

export default function ItemsList({ itemsArrProp }) {
    const [itemsArr, setItemsArr] = useState([]);

    let itemsRows = <li className={styles['item']}>There are no items in the cart, yet.</li>

    const removeItem = (productId) => {
        setItemsArr(state => state.filter(item => item.product._id !== productId));
    }

    useEffect(() => {
        if (!itemsArrProp) {
            return;
        }

        setItemsArr(itemsArrProp);
    }, [itemsArrProp]);

    if (itemsArr.length > 0) {
        itemsRows = itemsArr.map(item => <CartItem
            key={item.product._id}
            productId={item.product._id}
            name={item.product.name}
            price={item.product.price}
            imageUrl={item.product.imageUrl}
            quantity={item.quantity}
            removeItemFromArray={removeItem.bind(null, item.product._id)}
        />
        )
    }
    return (
        <article>
            <ul className={styles['items-list']}>
                {itemsRows}
            </ul>
        </article>
    );
}