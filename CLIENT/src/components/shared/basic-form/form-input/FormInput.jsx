import styles from './FormInput.module.css';
import Input from './input/Input';

export default function FormInput({ input }) {
    let label = <label className={styles['label']} htmlFor={input.name}>{input.label}</label>;

    if (input.type === 'checkbox' || input.type === 'radio') {
        label = '';
    }

    return (
        <div className={styles['field-border']}>
            <div className={styles['field']}>
                {label}
                <Input input={input} />
            </div>
        </div>
    );
}