import { useParams } from "react-router";
import ControlledForm from "../../shared/controlled-form/ControlledForm";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import { useCreateProduct } from "../productApi";

export default function ProductCreate() {
    const { subcategoryId } = useParams();
    const {
        pending,
        subcategoryName,
        notificationAlert,
        inputs,
        charInputs,
        values,
        changeHandler,
        submitHandler,
        submitPending
    } = useCreateProduct(subcategoryId);

    return (
        <section>
            {pending
                ? <LoadingSpinner />
                : <ControlledForm
                    title={`Add New Product to ${subcategoryName}`}
                    inputsArray={inputs}
                    buttonText="Add Product"
                    hasMainFieldset={true}
                    additionalFieldset={charInputs}
                    values={values}
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                    pending={submitPending}
                />
            }
            {notificationAlert}
        </section>
    );
}