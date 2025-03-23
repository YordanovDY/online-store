import './Radio.css';

export default function Radio({ name, label, checked }) {
    return (
        <div class="radio-wrapper-9">
            <input id={name + '_' + label} type="radio" name={name} defaultChecked={checked} />
            <label for={name + '_' + label}>{label}</label>
        </div>
    );
}