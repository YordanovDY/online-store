import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import api from "../../services/api";
import useNotification from "../../hooks/useNotification";

export function useOrderProcessing() {
    const [pendingList, setPendingList] = useState(true);
    const [ordersList, setOrdersList] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [pendingDetails, setPendingDetails] = useState(false);
    const [pendingSuppliers, suppliers] = useFetch('/user/by-role/supplier', []);
    const [inputArray, setInputArray] = useState([]);
    const { notificationAlert, notify } = useNotification();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setPendingList(true);
        api.get('/orders', signal)
            .then(res => {
                setOrdersList(res);
                setPendingList(false);
            })

            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                notify(err.message, 'error');
                setPendingList(false);
            })

        return () => {
            abortController.abort();
        }
    }, [notify]);

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

    const submitHandler = async (formData) => {
        const supplier = formData.get('supplier');
        const orderId = selectedOrder?._id;

        if (!supplier) {
            return notify('Please, choose a supplier!', 'error');
        }

        if (!orderId) {
            return notify('Please, select an order!', 'error');
        }

        const payload = {
            status: 'Shipped',
            supplier
        };

        try {
            await api.put(`/orders/${orderId}`, payload);
            setOrdersList(state => state.filter(order => order._id !== orderId));
            setSelectedOrder(null);
            notify(`Order ${orderId} has been successfully distributed.`, 'success');

        } catch (err) {
            notify(err.message, 'error');
        }
    }

    return {
        pendingList,
        pendingSuppliers,
        pendingDetails,
        ordersList,
        selectedOrder,
        inputArray,
        notificationAlert,
        chooseOrder,
        submitHandler,
    }
}