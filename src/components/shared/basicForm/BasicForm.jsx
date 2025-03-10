import styles from './BasicForm.module.css';

export default function BasicForm({
    title,
    inputsArray,
    additionalElement,
    buttonText
}) {
    return (
        <div className={styles['form-section']}>
            <form className={styles['form']}>
                <h2 className={styles['form-header']}>{title}</h2>

                {inputsArray.map(input =>
                    <div key={input.name} className={styles['field-border']}>
                        <div className={styles['field']}>
                            <label className={styles['label']} htmlFor={input.name}>{input.label}</label>
                            <input
                                id={input.name}
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                className="fancy-input-dark"
                            />
                        </div>
                    </div>
                )}
                {additionalElement ? additionalElement : ''}
                <button className="button btn-primary">{buttonText || 'Submit'}</button>
            </form>
        </div>
    );
}