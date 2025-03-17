import styles from './PriceItemValue.module.css';
import './BooleanValue.css';
import EnergyClass from './EnergyClass';

export default function PriceItemValue({ value }) {
    let valueLabel = '';

    switch (value) {
        case 'true':
            valueLabel = <i className="fa-solid fa-circle-check boolean-value b-true" />
            break;

        case 'false':
            valueLabel = <i className="fa-solid fa-circle-xmark boolean-value b-false" />
            break;

        case 'A+++':
        case 'A++':
        case 'A+':
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
            valueLabel = <EnergyClass value={value} />
            break;

        default:
            valueLabel = value;
            break;
    }

    return (
        <div className={styles['price-item-value']}>
            {valueLabel}
        </div>
    );
}