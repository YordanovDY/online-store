import styles from './CharItemValue.module.css';
import './BooleanValue.css';
import EnergyClass from './energy-class/EnergyClass';

export default function CharItemValue({ value }) {
    let valueLabel = '';

    switch (value) {
        case 'true':
        case true:
            valueLabel = <i className="fa-solid fa-circle-check boolean-value b-true" role="presentation" />
            break;

        case 'false':
        case false:
            valueLabel = <i className="fa-solid fa-circle-xmark boolean-value b-false" role="presentation" />
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
            valueLabel = <EnergyClass value={value}  role="img"/>
            break;

        default:
            valueLabel = value ? <p role="paragraph">{value}</p> : <p role="paragraph"></p>;
            break;
    }

    return (
        <div className={styles['price-item-value']}>
            {valueLabel}
        </div>
    );
}