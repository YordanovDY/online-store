import styles from './Price.module.css';

export default function Price({ price }) {
    return (
        <p className={styles['product-price']}>{Number(price).toFixed(2)}$</p>
    );
}