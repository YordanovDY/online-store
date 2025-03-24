import { useState, useEffect } from "react";
import styles from "./SimpleItemList.module.css"
import SimpleCartItem from "./simple-cart-item/SimpleCartItem";

export default function SimpleItemList({ itemsArrProp }) {

    const [itemsArr, setItemsArr] = useState([]);

    let itemsRows = <li className={styles['item']}>There are no items in the cart, yet.</li>

    useEffect(() => {
        if (!itemsArrProp) {
            return;
        }

        setItemsArr(itemsArrProp);
    }, [itemsArrProp]);

    if (itemsArr.length > 0) {
        itemsRows = itemsArr.map(item => <SimpleCartItem
            key={item.product._id}
            productId={item.product._id}
            name={item.product.name}
            price={item.product.price}
            imageUrl={item.product.imageUrl}
            quantity={item.quantity}
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