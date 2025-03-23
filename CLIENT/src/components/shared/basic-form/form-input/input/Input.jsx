import Checkbox from "./checkbox/Checkbox";
import Radio from "./radio/Radio";

export default function Input({ input }) {

    switch (input.type) {
        case 'text':
            return <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                defaultValue={input.value}
                className="fancy-input-dark"
            />

        case 'password':
            return <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                defaultValue={input.value}
                className="fancy-input-dark"
            />

        case 'email':
            return <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                defaultValue={input.value}
                className="fancy-input-dark"
            />

        case 'textarea':
            return <textarea
                id={input.name}
                name={input.name}
                placeholder={input.placeholder}
                defaultValue={input.value}
                rows="6"
                className="fancy-input-dark"
            />


        case 'select':
            return <select
                id={input.name}
                name={input.name}
                defaultValue={input.value}
                className="fancy-input-dark"
            >
                <option value="">Choose {input.label}</option>
                {input.options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>

        case 'checkbox':
            const isChecked = input.checked === 'false' ? false : true;

            return <Checkbox
                name={input.name}
                label={input.label}
                checked={isChecked}
            />

        case 'radio':
            return <Radio
                name={input.name}
                label={input.label}
                checked={isChecked}
            />
    }
}