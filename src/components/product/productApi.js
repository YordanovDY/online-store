import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import api from "../../services/api";
import { baseProductTemplate, charTemplates } from "./templates";
import { getFormData } from "../../utils/formUtil";

const baseUrl = '/products/catalog';

export function useUpdateProduct(productId) {
    const [pending, setPending] = useState(true);
    const [inputs, setInputs] = useState([]);
    const [charInputs, setCharInputs] = useState([]);
    const [productName, setProductName] = useState('');
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
            console.error(err);

        }
    }

    return {
        pending,
        inputs,
        charInputs,
        productName,
        submitHandler
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