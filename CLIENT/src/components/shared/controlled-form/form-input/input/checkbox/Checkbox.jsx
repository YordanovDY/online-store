import { useContext } from 'react';
import './Checkbox.css';
import { InputContext } from '../../../../../../contexts/InputContext';

export default function Checkbox({ name, label, checked }) {
    const { changeHandler } = useContext(InputContext);

    return (
        <div className="checkbox-wrapper-28">
            <input onChange={changeHandler} id={name} type="checkbox" name={name} className="promoted-input-checkbox" checked={checked} />
            <svg>
                <use xlinkHref="#checkmark-28" />
            </svg>
            <label htmlFor={name}>{label}</label>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <symbol id="checkmark-28" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        fill="none"
                        d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                </symbol>
            </svg>
        </div>
    );
}