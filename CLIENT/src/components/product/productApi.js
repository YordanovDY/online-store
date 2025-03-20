import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import api from "../../services/api";
import { baseProductTemplate, charTemplates } from "./templates";
import { getFormData } from "../../utils/formUtil";
import useNotification from "../../hooks/useNotification";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";

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
    }, [productId]);

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
        submitHandler
    }
}


export function useCreateProduct(subcategoryId) {
    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const [pending, subcategory, error] = useFetch(SUBCATEGORY_URL, {});
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
    }, [error]);

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
            await api.post(baseUrl, payload);
            navigate(`/catalog/${subcategoryId}/subcategory?page=1`)

        } catch (err) {
            notify(err.message, 'error');
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