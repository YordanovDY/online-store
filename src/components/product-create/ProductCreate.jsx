import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import BasicForm from "../shared/basic-form/BasicForm";
import LoadingSpinner from "../shared/loading-spinner/LoadingSpinner";
import charTemplates from "./templates";

export default function ProductCreate() {
    const { subcategoryId } = useParams();

    const SUBCATEGORY_URL = `/subcategories/${subcategoryId}`;
    const [pending, subcategory, error] = useFetch(SUBCATEGORY_URL, {});
    const [subcategoryName, setSubcategoryName] = useState('');
    const [charInputs, setCharInputs] = useState([]);

    useEffect(() => {
        if (error) {
            console.error(error);
            // TODO: Implement error handling
            return;
        }

        setCharInputs(charTemplates[subcategory._id]);
        setSubcategoryName(subcategory.name);
    }, [subcategory, error]);

    const inputs = [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'eg. Lenovo' },
        { name: 'name', label: 'Name', type: 'text', placeholder: 'eg. Lenovo Legion 5 Pro' },
        { name: 'imageUrl', label: 'Image URL', type: 'text', placeholder: 'https://...' },
        { name: 'quantity', label: 'Initial Quantity', type: 'text', placeholder: 'eg. 50' },
        { name: 'price', label: 'Price', type: 'text', placeholder: 'eg. 1500.89$' },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'The Lenovo Legion 5 Pro is a gaming laptop designed for high performance...' },
    ]
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
                />
            }
        </section>
    );
}