import { useState } from "react"

export default function useForm(initialValuesArr) {

    const processedValues = {};

    for (const field of initialValuesArr) {
        const isCheckable = field.type === 'checkbox' || field.type === 'radio';

        if (isCheckable) {
            processedValues[field.name] = field.checked;

        } else {
            processedValues[field.name] = field.value;
        }
    }

    const [values, setValues] = useState(processedValues);

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
    }
}