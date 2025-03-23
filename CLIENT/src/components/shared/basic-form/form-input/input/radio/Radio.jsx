import './Radio.css';

export default function Radio({ name, label, value, checked }) {
    return (
        <div className="radio-wrapper-9">
            <input id={name + '_' + label} type="radio" name={name} defaultChecked={checked} value={value} />
            <label htmlFor={name + '_' + label}>{label}</label>
        </div>
    );
}