import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import OverlayModal from "../../shared/overlay/OverlayModal";
import Table from "../../shared/table/Table";
import OrderOverview from "../order-overview/OrderOverview";
import { useOrderDelivery } from "../OrdersProcessApi";
import styles from './DashOrdersDelivery.module.css';

export default function DashOrdersDelivery() {
    const { ordersList,
        pendingList,
        pendingDetails,
        selectedOrder,
        notificationAlert,
        deliveryModal,
        setOpenDeliveryModal,
        deliveryHandler,
        chooseOrder,
        onDeliveryOpen } = useOrderDelivery();

    let rows = [];

    for (const row of ordersList) {
        rows.push({ date: row.orderedAt, id: row._id, status: row.status });
    }

    return (
        <section className={styles['orders-section']}>
            <h2 className="fancy-header">Orders Delivery</h2>

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

                        <button onClick={onDeliveryOpen} className="button btn-primary">Deliver</button>
                    </div>
                </article>
            }
            {notificationAlert}
            <OverlayModal
                title="Delivery Information"
                message={`Name: ${selectedOrder?.recipient?.fullName} | Phone Number: ${selectedOrder?.recipient?.phoneNumber} | Address: ${selectedOrder?.recipient?.address}`}
                open={deliveryModal}
                setOpen={setOpenDeliveryModal}
                handler={deliveryHandler}
                actionButtonName="Confirm Delivery"
            />
        </section>
    );
}