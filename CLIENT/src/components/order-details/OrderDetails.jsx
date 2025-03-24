import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import ContactDetails from "../shared/contact-details/ContactDetails";
import SimpleItemList from "../shared/simple-item-list/SimpleItemList";
import { useEffect } from "react";
import useNotification from "../../hooks/useNotification";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import Status from "../shared/status/Status";
import { longDateFormat, onlyDateFormat } from "../../utils/dateUtil";
import OrderOverview from "./order-overview/OrderOverview";

export default function OrderDetails() {
    const { orderId } = useParams();
    const [pending, order, error] = useFetch(`/orders/${orderId}`, {});

    const { notificationAlert, notify } = useNotification();

    useEffect(() => {
        if (error) {
            return notify(error, 'error');
        }
    }, [error]);


    return (
        <section className="d-flex f-direction-column gap-20 padding-20">
            <h2 className="fancy-header">Order Details</h2>
            {pending
                ? <LoadingSpinner />

                : <div className="d-flex f-direction-column gap-20">
                    <OrderOverview
                        id={order._id}
                        status={order.status}
                        orderedAt={order.orderedAt}
                        estimatedDelivery={order.estimatedDelivery}
                        totalPrice={order.totalPrice}
                        paymentMethod={order.paymentMethod}
                    />

                    <div className="d-flex gap-20 jc-center">
                        <SimpleItemList itemsArrProp={order.products} />
                        <ContactDetails contacts={order.recipient} />
                    </div>
                </div>
            }

            {notificationAlert}
        </section>
    );
}