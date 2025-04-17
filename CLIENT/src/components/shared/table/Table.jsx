import TableRow from "./TableRow";
import styles from './Table.module.css';

export default function Table({ headerCells, bodyRows, showDetails }) {
    let rows = <tr><td>No records yet</td></tr>;

    if (bodyRows.length > 0) {
        rows = bodyRows.map(row => <TableRow key={row.id} row={row} onChoose={showDetails.bind(null, row.id)} />)
    }

    return (
        <table className={styles['table']}>
            <thead>
                <tr className={styles['tr']}>
                    {headerCells.map(cell => <th key={cell} className={styles['td']}>{cell}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}