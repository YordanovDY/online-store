import { longDateFormat, onlyDateFormat } from "../../../utils/dateUtil";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import Status from "../../shared/status/Status";
import styles from "./OrderOverview.module.css";

export default function OrderOverview({
    pending,
    id,
    status,
    orderedAt,
    estimatedDelivery,
    totalPrice,
    paymentMethod
}) {
    return (
        <ul className={styles['order-overview']}>
            {pending
                ? <LoadingSpinner />
                :
                <>
                    {
                        id
                            ? <>
                                <li>Order ID: {id}</li>
                                <li>Status: {<Status status={status} />}</li>
                                <li>Ordered At: {longDateFormat(orderedAt)}</li>
                                <li>Estemated Delivery: {onlyDateFormat(estimatedDelivery)}</li>
                                <li>Total Price: {Number(totalPrice).toFixed(2)}$</li>
                                <li>Payment Method: {paymentMethod}</li>
                            </>
                            : null
                    }
                </>
            }
        </ul >
    );
}