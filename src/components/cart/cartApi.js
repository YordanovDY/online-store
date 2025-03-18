import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router";

const baseUrl = '/user/cart'

export function useCart() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [pending, setPending] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setPending(true);

        api.get(baseUrl, signal)
            .then(items => {
                setItems(items);
                return items;
            })

            .then(items => {
                const total = calculateTotalPrice(items);
                setTotalPrice(total);
            })

            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                navigate('/404');
            })

            .finally(() => {
                setPending(false);
            });

        return () => {
            abortController.abort();
        }
    }, []);

    return {
        items,
        totalPrice,
        pending,
    }
}

export function useRemoveItem(productId) {
    const [pending, setPending] = useState(true);

    const removeHandler = async () => {
        setPending(true);

        try {
            const result = await api.del(baseUrl + `/${productId}`);
            return result.message;

        } catch (err) {
            throw new Error(err.message);

        } finally {
            setPending(false);
        }
    }

    return { removeHandler, pending };
}

function calculateTotalPrice(items) {
    let total = 0;

    for (const item of items) {
        total += item.product.price * item.quantity;
    }

    return total;
}