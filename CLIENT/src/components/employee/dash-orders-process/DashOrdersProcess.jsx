import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import Table from "../../shared/table/Table";
import { useOrderProcessing } from "../OrdersProcessApi";
import styles from './DashOrdersProcess.module.css';

export default function DashOrdersProcess() {
    const { pendingList, ordersList } = useOrderProcessing();
    let rows = [];

    for (const row of ordersList) {
        rows.push({ date: row.orderedAt, id: row._id, status: row.status });
    }

    return (
        <section className={styles['orders-section']}>
            <h2 className="fancy-header">Orders Processing</h2>

            {pendingList
                ? <LoadingSpinner />

                : <Table headerCells={['Date', 'ID', 'Status']} bodyRows={rows} />
            }
        </section>
    );
}