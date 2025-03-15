import { useEffect, useState } from "react"

export default function useForm(initialValuesArr) {
    const [values, setValues] = useState({});

    const addFields = (fieldsArr) => {
        const newValues = {};

        for (const field of fieldsArr) {
            const isCheckable = field.type === 'checkbox' || field.type === 'radio';

            if (isCheckable) {
                newValues[field.name] = field.checked;

            } else {
                newValues[field.name] = field.value;
            }
        }

        setValues(state => ({ ...state, ...newValues }));
    }

    useEffect(() => {
        addFields(initialValuesArr);
    }, []);

    const changeHandler = (e) => {
        const target = e.target;
        const isCheckable = target.type === 'checkbox' || target.type === 'radio';

        setValues(state => {
            return isCheckable
                ? { ...state, [target.name]: target.checked }
                : { ...state, [target.name]: target.value }

        });
    }

    return {
        values,
        changeHandler,
        addFields
    }
}