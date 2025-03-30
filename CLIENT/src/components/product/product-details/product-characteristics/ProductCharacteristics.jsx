import LoadingSpinner from '../../../shared/loading-spinner/LoadingSpinner';
import CharItemValue from './price-item-value/CharItemValue';
import styles from './ProductCharacteristics.module.css';

export default function ProductCharacteristics({ characteristicsArr = [], pending }) {
    return (
        <div className={styles['characteristics-container']}>
            {pending
                ? <LoadingSpinner />

                : <ul className={styles['items-list']}>
                    {characteristicsArr.map(item =>
                        <li key={item.char} className={styles['price-item']}>
                            <div className={styles['price-item-key']}>{item.char}</div>
                            <CharItemValue value={item.value} />
                        </li>
                    )}
                </ul>
            }
        </div>
    );
}