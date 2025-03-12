import BasicForm from "../shared/basic-form/BasicForm";

export default function ProductCreate() {
    const inputs = [
        { name: 'brand', label: 'Brand', type: 'text', placeholder: 'eg. Lenovo' },
        { name: 'name', label: 'Name', type: 'text', placeholder: 'eg. Lenovo Legion 5 Pro' },
        { name: 'imageUrl', label: 'Image URL', type: 'text', placeholder: 'https://...' },
        { name: 'quantity', label: 'Initial Quantity', type: 'text', placeholder: 'eg. 50' },
        { name: 'price', label: 'Price', type: 'text', placeholder: 'eg. 1500.89$' },
        { name: 'description', label: 'Description', type: 'textarea', placeholder: 'The Lenovo Legion 5 Pro is a gaming laptop designed for high performance...' },
        
        // TODO: Characteristics
    ]
    return (
        <section>
            <BasicForm
                title="Add New Product to TVs"
                inputsArray={inputs}
                buttonText="Add"
            />
        </section>
    );
}