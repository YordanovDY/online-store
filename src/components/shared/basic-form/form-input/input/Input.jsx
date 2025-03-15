// const Input = (input) => 
import { useContext } from "react";
import Checkbox from "./checkbox/Checkbox";
import { InputContext } from "../../../../../contexts/InputContext";

export default function Input({ input }) {
    const { changeHandler, values } = useContext(InputContext);

    switch (input.type) {
        case 'text':
            return <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={changeHandler}
                value={values[input.name]}
                className="fancy-input-dark"
            />

        case 'password':
            return <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={changeHandler}
                value={values[input.name]}
                className="fancy-input-dark"
            />

        case 'email':
            return <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={changeHandler}
                value={values[input.name]}
                className="fancy-input-dark"
            />

        case 'textarea':
            return <textarea
                id={input.name}
                name={input.name}
                placeholder={input.placeholder}
                onChange={changeHandler}
                value={values[input.name]}
                rows="6"
                className="fancy-input-dark"
            />


        case 'select':
            return <select
                id={input.name}
                name={input.name}
                onChange={changeHandler}
                value={values[input.name]}
                className="fancy-input-dark"
            >
                <option value="">Choose {input.label}</option>
                {input.options.map(option => <option value={option.value}>{option.text}</option>)}
            </select>

        case 'checkbox':
            return <Checkbox
                name={input.name}
                label={input.label}
                checked={values[input.name]}
            />
    }
}