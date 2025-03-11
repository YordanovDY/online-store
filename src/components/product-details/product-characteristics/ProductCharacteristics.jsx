import styles from './ProductCharacteristics.module.css';

export default function ProductCharacteristics({ characteristicsArr }) {
    return (
        <div className={styles['characteristics-container']}>
            <ul className={styles['items-list']}>
                {characteristicsArr.map(item =>
                    <li key={item.char} className={styles['price-item']}>
                        <div className={styles['price-item-key']}>{item.char}</div>
                        <div className={styles['price-item-value']}>{item.value}</div>
                    </li>
                )}
            </ul>
        </div>
    );
}