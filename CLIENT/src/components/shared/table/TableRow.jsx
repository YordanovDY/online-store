import { longDateFormat } from '../../../utils/dateUtil';
import Status from '../status/Status';
import styles from './Table.module.css';

export default function TableRow({ row }) {
    const rowAsArray = Object.values(row);

    return (
        <tr className={styles['tr']}>
            {rowAsArray.map(cell => {
                const isStatus = cell === 'Processing' || cell === 'Shipped' || cell === 'Delivered';
                const isDate = cell > 1000000000000;

                if (isDate) {
                    return <td key={cell} className={styles['td']}>{longDateFormat(cell)}</td>
                }

                if (isStatus) {
                    return <th key={cell} className={styles['td']}>{<Status status={cell} />}</th>
                }

                return <td key={cell} className={styles['td']}>{cell}</td>
            })}
        </tr>
    );
}