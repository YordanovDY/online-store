import { useParams } from "react-router";
import { useUpdateProduct } from "../productApi";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import BasicForm from "../../shared/basic-form/BasicForm";

export default function ProductUpdate() {
    const { productId } = useParams();
    const { pending, inputs, charInputs, productName, submitHandler} = useUpdateProduct(productId);

    return (
        <section>
            {pending
                ? <LoadingSpinner />
                : <BasicForm
                    title={`Update ${productName}`}
                    inputsArray={inputs}
                    buttonText="Update"
                    hasMainFieldset={true}
                    additionalFieldset={charInputs}
                    submitHandler={submitHandler}
                />
            }
        </section>
    );
}