import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import Table from "../../shared/table/Table";
import OrderOverview from "../order-overview/OrderOverview";
import { useOrderProcessing } from "../OrdersProcessApi";
import styles from './DashOrdersProcess.module.css';

export default function DashOrdersProcess() {
    const { pendingList, ordersList } = useOrderProcessing();
    const { pendingList, ordersList, pendingDetails, selectedOrder, inputArray, pendingSuppliers, chooseOrder } = useOrderProcessing();
    let rows = [];

    for (const row of ordersList) {
        rows.push({ date: row.orderedAt, id: row._id, status: row.status });
    }

    return (
        <section className={styles['orders-section']}>
            <h2 className="fancy-header">Orders Processing</h2>

            {pendingList
                ? <LoadingSpinner />

                : <article className="d-flex gap-20">
                    <Table headerCells={['Date', 'ID', 'Status']} bodyRows={rows} showDetails={chooseOrder} />
                    <div className="d-flex f-direction-column gap-20">
                        <OrderOverview
                            pending={pendingDetails}
                            id={selectedOrder?._id}
                            status={selectedOrder?.status}
                            totalPrice={selectedOrder?.totalPrice}
                            paymentMethod={selectedOrder?.paymentMethod}
                            estimatedDelivery={selectedOrder?.estimatedDelivery}
                            orderedAt={selectedOrder?.orderedAt}
                        />
                    </div>
                </article>
            }
        </section>
    );
}