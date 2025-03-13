import styles from './BasicForm.module.css';
import Input from './Input';

export default function BasicForm({
    title,
    inputsArray,
    additionalElement,
    buttonText,
    additionalFieldset,
    hasMainFieldset = false
}) {
    const mainInputs = inputsArray.map(input =>
        <div key={input.name} className={styles['field-border']}>
            <div className={styles['field']}>
                <label className={styles['label']} htmlFor={input.name}>{input.label}</label>
                <Input input={input} />
            </div>
        </div>
    )

    return (
        <div className={styles['form-section']}>
            <form className={styles['form']}>
                <h2 className={styles['form-header']}>{title}</h2>
                {hasMainFieldset
                    ? <fieldset className={styles['fieldset']}>
                        <h4 className={styles['char-header']}>Main</h4>
                        {mainInputs}
                    </fieldset>

                    : mainInputs
                }

                {additionalFieldset &&
                    <fieldset className={styles['fieldset']}>
                        <h4 className={styles['char-header']}>Characteristics</h4>
                        {additionalFieldset.map(input =>
                            <div key={input.name} className={styles['field-border']}>
                                <div className={styles['field']}>
                                    <label className={styles['label']} htmlFor={input.name}>{input.label}</label>
                                    <Input input={input} />
                                </div>
                            </div>
                        )}
                    </fieldset>
                }


                {additionalElement ? additionalElement : ''}
                <button className="button btn-primary">{buttonText || 'Submit'}</button>
            </form>
        </div>
    );
}