import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import api from "../../services/api";

export function useOrderProcessing() {
    const [pendingList, ordersList] = useFetch('/orders', []);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [pendingDetails, setPendingDetails] = useState(false);
    const [pendingSuppliers, suppliers] = useFetch('/user/by-role/supplier', []);
    const [inputArray, setInputArray] = useState([]);

    useEffect(() => {
        if (suppliers.length === 0) {
            return;
        }

        let supArray = [];

        for (const supplier of suppliers) {
            supArray.push({ id: supplier._id, email: supplier.email });
        }

        setInputArray(supArray);
    }, [suppliers]);

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
        pendingSuppliers,
        pendingDetails,
        ordersList,
        selectedOrder,
        inputArray,
        chooseOrder,
    }
}