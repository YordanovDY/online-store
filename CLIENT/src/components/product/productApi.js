import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import api from "../../services/api";
import { baseProductTemplate, charTemplates } from "./templates";
import { getFormData } from "../../utils/formUtil";
import useNotification from "../../hooks/useNotification";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import useMutate from "../../hooks/useMutate";

const baseUrl = '/products/catalog';

export function useUpdateProduct(productId) {
    const [pending, setPending] = useState(true);
    const [inputs, setInputs] = useState([]);
    const [charInputs, setCharInputs] = useState([]);
    const [productName, setProductName] = useState('');
    const { notify, notificationAlert } = useNotification();
    const navigate = useNavigate();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setPending(true);

        api.get(`${baseUrl}/${productId}`, signal)
            .then(product => {
                setInputs(getBaseInputsArr(product));
                setCharInputs(getCharInputsArr(product));
                setProductName(product.name);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    return;
                }

                console.error(err);
                navigate('/404');

            })
            .finally(() => {
                setPending(false);
            });


        return () => {
            abortController.abort();
        }
    }, [productId, navigate]);

    const submitHandler = async (formData) => {
        const data = getFormData(formData);

        const { brand, name, imageUrl, quantity, price, description, ...chars } = data;

        const characteristics = transformCharacteristics(chars);

        const payload = { brand, name, imageUrl, quantity: Number(quantity), price: Number(price), description, characteristics };

        try {
            await api.put(`${baseUrl}/${productId}`, payload);
            navigate(`/products/${productId}/details`);

        } catch (err) {
            notify(err.message, 'error');
        }
    }

    return {
        pending,
        inputs,
        charInputs,
        productName,
        notificationAlert,
        submitHandler,
    }
}


export function useCreateProduct(subcategoryId) {
    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const [pending, subcategory, error] = useFetch(SUBCATEGORY_URL, {});
    const [submitPending, setSubmitPending] = useState(false);
    const [subcategoryName, setSubcategoryName] = useState('');
    const { notify, notificationAlert } = useNotification();
    const navigate = useNavigate();

    const inputs = baseProductTemplate();

    const charInputs = charTemplates[subcategoryId]();

    const { values, changeHandler } = useForm([...inputs, ...charInputs]);

    useEffect(() => {
        if (error) {
            notify(error.message, 'error');
            return;
        }
    }, [error, notify]);

    useEffect(() => {
        const receivedSubcat = Object.entries(subcategory).length > 0;

        if (!receivedSubcat) {
            return;
        }

        setSubcategoryName(subcategory.name);
    }, [subcategory])

    const submitHandler = async (e) => {
        e.preventDefault();
        const { brand, name, imageUrl, quantity, price, description, ...chars } = values;
        const characteristics = transformCharacteristics(chars);

        const payload = { brand, name: `${brand} ${name}`, imageUrl, quantity: Number(quantity), price: Number(price), description, characteristics, subcategory: subcategoryId };

        try {
            setSubmitPending(true);

            await api.post(baseUrl, payload);
            navigate(`/catalog/${subcategoryId}/subcategory?page=1`);

        } catch (err) {
            notify(err.message, 'error');

        } finally {
            setSubmitPending(false);
        }
    }

    return {
        pending,
        subcategoryName,
        notificationAlert,
        inputs,
        charInputs,
        values,
        changeHandler,
        submitHandler,
        submitPending
    }
}

export function useInteractions(productId, quantity, onQuantityUpdate) {
    const baseUrl = `/products/catalog/${productId}`;

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isLoadGoodsModalOpen, setIsLoadGoodsModalOpen] = useState(false);

    const { mutate: onDelete } = useMutate(baseUrl, 'DELETE');
    const { mutate: onLoadGoods } = useMutate(baseUrl, 'PUT');
    const { notify, notificationAlert } = useNotification();
    const navigate = useNavigate();

    const setOpenDeleteModal = (status) => {
        setIsDeleteModalOpen(status)
    }

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    }

    const setLoadGoodsModal = (status) => {
        setIsLoadGoodsModalOpen(status)
    }

    const openLoadGoodsModal = () => {
        setIsLoadGoodsModalOpen(true);
    }

    const deleteHandler = async () => {
        await onDelete();
        navigate('/');
    }

    const loadGoodsHandler = async (formData) => {
        const addedQty = Number(formData.get('quantity'));

        if (isNaN(addedQty)) {
            return notify('Quantity must be a positive integer!', 'error');
        }


        if (addedQty < 1) {
            return notify('Quantity must be a positive integer!', 'error');
        }

        if (!Number.isInteger(addedQty)) {
            return notify('Quantity must be a positive integer!', 'error');
        }

        const newQuantity = quantity + addedQty;
        const payload = { quantity: newQuantity };

        try {
            await onLoadGoods(payload);
            onQuantityUpdate(newQuantity);
            setIsLoadGoodsModalOpen(false);

        } catch (err) {
            notify(err.message, 'error');
        }
    }

    return {
        notificationAlert,
        isDeleteModalOpen,
        isLoadGoodsModalOpen,
        openDeleteModal,
        openLoadGoodsModal,

        setOpenDeleteModal,
        setLoadGoodsModal,

        deleteHandler,
        loadGoodsHandler,
    }
}

function getBaseInputsArr(product) {
    const {
        brand,
        name,
        imageUrl,
        quantity,
        price,
        description
    } = product;

    const values = {
        brand,
        name,
        imageUrl,
        quantity,
        price,
        description
    };

    return baseProductTemplate(values);
}

function getCharInputsArr(product) {
    const { characteristics, subcategory } = product;

    const values = {};

    for (const property of characteristics) {
        values[property.char] = property.value;
    }

    return charTemplates[subcategory](values);
}

function transformCharacteristics(chars) {
    let characteristics = [];
    const characteristicsArr = Object.entries(chars);

    for (const [char, value] of characteristicsArr) {
        characteristics.push({ char, value });
    }

    return characteristics;
}