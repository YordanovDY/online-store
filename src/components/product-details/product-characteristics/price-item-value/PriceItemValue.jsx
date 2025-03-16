import styles from './PriceItemValue.module.css';
import './BooleanValue.css';

export default function PriceItemValue({ value }) {
    let booleanValue = value === 'true' || value === 'false' ? value : null;
    return (
        <div className={styles['price-item-value']}>
            {booleanValue === null
                ? value
                : booleanValue === 'true'
                    ? <i className="fa-solid fa-circle-check boolean-value b-true" />
                    : <i className="fa-solid fa-circle-xmark boolean-value b-false" />
            }
        </div>
    );
}