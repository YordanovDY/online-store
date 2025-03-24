import { longDateFormat, onlyDateFormat } from "../../../utils/dateUtil";
import Status from "../../shared/status/Status";
import styles from "./OrderOverview.module.css";

export default function OrderOverview({
    id,
    status,
    orderedAt,
    estimatedDelivery,
    totalPrice,
    paymentMethod
}) {
    return (
        <ul className={styles['order-overview']}>
            <li>Order ID: {id}</li>
            <li>Status: {<Status status={status} />}</li>
            <li>Ordered At: {longDateFormat(orderedAt)}</li>
            <li>Estemated Delivery: {onlyDateFormat(estimatedDelivery)}</li>
            <li>Total Price: {Number(totalPrice).toFixed(2)}$</li>
            <li>Payment Method: {paymentMethod}</li>
        </ul>
    );
}