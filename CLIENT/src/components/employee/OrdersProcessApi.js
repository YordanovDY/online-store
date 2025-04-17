import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import api from "../../services/api";

export function useOrderProcessing() {
    const [pendingList, ordersList] = useFetch('/orders', []);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [pendingDetails, setPendingDetails] = useState(false);

    const chooseOrder = (orderId) => {
        api.get(`/orders/${orderId}`, null)
            .then(res => {
                setPendingDetails(true);

                setSelectedOrder(res);

                setPendingDetails(false);
            });
    }

    return {
        pendingList,
        pendingDetails,
        ordersList,
        selectedOrder,
        chooseOrder
    }
}