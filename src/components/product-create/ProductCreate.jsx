import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import BasicForm from "../shared/basic-form/BasicForm";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import charTemplates from "./templates";
import useForm from "../../hooks/useForm";
import useMutate from "../../hooks/useMutate";

export default function ProductCreate() {
    const { subcategoryId } = useParams();

    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const [pending, subcategory, error] = useFetch(SUBCATEGORY_URL, {});
    const [subcategoryName, setSubcategoryName] = useState('');
    const [charInputs, setCharInputs] = useState([]);

    // const { responseData, mutate, pendingMutate, errorMutate } = useMutate('/products/catalog', 'POST');

    const inputs = [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'eg. Lenovo', value: '' },
        { name: 'name', label: 'Name', type: 'text', placeholder: 'eg. Lenovo Legion 5 Pro', value: '' },
        { name: 'imageUrl', label: 'Image URL', type: 'text', placeholder: 'https://...', value: '' },
        { name: 'quantity', label: 'Initial Quantity', type: 'text', placeholder: 'eg. 50', value: '' },
        { name: 'price', label: 'Price', type: 'text', placeholder: 'eg. 1500.89$', value: '' },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'The Lenovo Legion 5 Pro is a gaming laptop designed for high performance...', value: '' },
    ]
    const { values, changeHandler, addFields } = useForm(inputs);

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

        setCharInputs(charTemplates[subcategory._id]());
        setSubcategoryName(subcategory.name);
    }, [subcategory])

    // TODO: Fix controlled form 
    useEffect(() => {
        if (!charInputs) {
            return;
        }

        addFields(charInputs);
    }, [charInputs]);


    const submitHandler = (e) => {
        e.preventDefault();

        console.log(values);
    }

    return (
        <section>
            {pending
                ? <LoadingSpinner />
                : <BasicForm
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