export function getFormData(formData) {
    let labels = [];
    document.querySelectorAll('form input, form select').forEach(input => {
        if (input.name !== 'search') {
            labels.push(input.name)
        }
    });
    labels = Array.from(new Set(labels));

    for (const lab of labels) {
        if (!formData.has(lab)) {
            formData.set(lab, false);
        }

        if (formData.get(lab) === 'on') {
            formData.set(lab, true);
        }
    }

    return Object.fromEntries(formData);
}