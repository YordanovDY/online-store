import { useRef } from "react";
import { useFormStatus } from "react-dom";
import useMutate from "../../../../../hooks/useMutate";
import useNotification from "../../../../../hooks/useNotification";

export default function QtyForm({ productId }) {
    const qtyRef = useRef();
    const { notify, notificationAlert } = useNotification();
    const { mutate } = useMutate('/user/cart', 'POST');

    const incrementQuantityHandler = () => {
        const currentValue = Number(qtyRef.current.value);
        const newValue = currentValue + 1;
        qtyRef.current.value = newValue;
    }

    const decrementQuantityHandler = () => {
        const currentValue = Number(qtyRef.current.value);

        if (currentValue <= 1) {
            return;
        }

        const newValue = currentValue - 1;
        qtyRef.current.value = newValue;
    }

    const submitHandler = async (formData) => {
        const quantity = formData.get('quantity');
        const payload = { item: productId, quantity: Number(quantity) };

        try {
            await mutate(payload);
            notify(`${quantity}x product has been added to cart`, 'success');

        } catch (err) {
            notify(err.message, 'error');
        }
    }

    return (
        <>
            <form action={submitHandler} className="max-w-2xl mx-auto d-flex gap-20 ai-center">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button onClick={decrementQuantityHandler} type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input ref={qtyRef} type="text" id="quantity" name="quantity" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue='1' required />

                    <button onClick={incrementQuantityHandler} type="button" id="increment-button" data-input-counter-increment="bedrooms-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
                <Submit />
            </form>
            {notificationAlert}
        </>
    );
}

function Submit() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} className="button btn-primary">
            <i className="fa-solid fa-cart-shopping" />
            <span>Add to Cart</span>
        </button>
    )
}