import styles from './ProductsListItem.module.css';

export default function ProductsListItem({ imageUrl, name, price }) {
    return (
        <li>
            <a href="#" className={styles['product-item']}>
                <img className={styles['product-item-img']} src={imageUrl} />
                    <h4 className={styles['product-item-title']}>{name}</h4>
                    <p className={styles['product-item-price']}>{price}$</p>
            </a>
        </li>
    )
}