import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ControlledForm from "../../shared/controlled-form/ControlledForm";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import { charTemplates, baseProductTemplate } from "../templates";
import useForm from "../../../hooks/useForm";
import useMutate from "../../../hooks/useMutate";

export default function ProductCreate() {
    const { subcategoryId } = useParams();

    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const [pending, subcategory, error] = useFetch(SUBCATEGORY_URL, {});
    const [subcategoryName, setSubcategoryName] = useState('');
    const navigate = useNavigate();

    const { mutate } = useMutate('/products/catalog', 'POST');

    const inputs = baseProductTemplate();

    const charInputs = charTemplates[subcategoryId]();

    const { values, changeHandler } = useForm([...inputs, ...charInputs]);

    useEffect(() => {
        if (error) {
            console.error(error);
            // TODO: Implement error handling
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
        const characteristicsArr = Object.entries(chars);

        let characteristics = [];
        for (const [char, value] of characteristicsArr) {
            characteristics.push({ char, value });
        }

        const payload = { brand, name: `${brand} ${name}`, imageUrl, quantity: Number(quantity), price: Number(price), description, characteristics, subcategory: subcategoryId };

        try {
            await mutate(payload);
            navigate(`/catalog/${subcategoryId}/subcategory?page=1`)
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <section>
            {pending
                ? <LoadingSpinner />
                : <ControlledForm
                    title={`Add New Product to ${subcategoryName}`}
                    inputsArray={inputs}
                    buttonText="Add Product"
                    hasMainFieldset={true}
                    additionalFieldset={charInputs}
                    values={values}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                />
            }
        </section>
    );
}