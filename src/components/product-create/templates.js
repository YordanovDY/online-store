const laptop = [
    { name: 'RAM', label: 'RAM', type: 'text', placeholder: 'eg. 16 GB' },
    { name: 'HDD', label: 'HDD', type: 'text', placeholder: 'eg. 512 GB SSD' },
    { name: 'CPU', label: 'CPU', type: 'text', placeholder: 'eg. Intel Core i7-10750H' },
    { name: 'GPU', label: 'GPU', type: 'text', placeholder: 'eg. Nvidia GTX 1650 Ti' },
    { name: 'Operating System', label: 'Operating System', type: 'text', placeholder: 'eg. Windows 11' },
    { name: 'Battery', label: 'Battery', type: 'text', placeholder: 'eg. 86Wh' },
    { name: 'Display Size', label: 'Display Size', type: 'text', placeholder: 'eg. 15.6-inch' },
]

const pc = [
    { name: 'RAM', label: 'RAM', type: 'text', placeholder: 'eg. 32 GB' },
    { name: 'HDD', label: 'HDD', type: 'text', placeholder: 'eg. 1 TB HDD' },
    { name: 'CPU', label: 'CPU', type: 'text', placeholder: 'eg. Intel Core i7-10750H' },
    { name: 'GPU', label: 'GPU', type: 'text', placeholder: 'eg. Nvidia GTX 1650 Ti' },
    { name: 'Operating System', label: 'Operating System', type: 'text', placeholder: 'eg. Windows 10 Pro' },
]

const tv = [
    { name: 'Screen Technology', label: 'Screen Technology', type: 'text', placeholder: 'eg. LED TV' },
    { name: 'Display Size', label: 'Display Size', type: 'text', placeholder: 'eg. 50-inch' },
    { name: 'Resolution', label: 'Resolution', type: 'text', placeholder: 'eg. 4K ULTRA HD 3840 x 2160' },
    { name: 'Picture Motion', label: 'Picture Motion', type: 'text', placeholder: 'eg. 60 Hz' },
    { name: 'Smart TV', label: 'Smart TV', type: 'checkbox' },
]

const smartphoneOrTablet = [
    { name: 'CPU', label: 'CPU', type: 'text', placeholder: 'eg. Huawei Kirin 8000' },
    { name: 'RAM', label: 'RAM', type: 'text', placeholder: 'eg. 12 GB' },
    { name: 'Internal Memory', label: 'Internal Memory', type: 'text', placeholder: 'eg. 256 GB' },
    { name: 'Display Size', label: 'Display Size', type: 'text', placeholder: 'eg. 6.7-inch' },
    { name: 'Front Camera Resolution', label: 'Front Camera Resolution', type: 'text', placeholder: 'eg. 60 MP' },
    { name: 'Rear Camera Resolution', label: 'Rear Camera Resolution', type: 'text', placeholder: 'eg. 50+8 MP' },
    { name: 'Battery', label: 'Battery', type: 'text', placeholder: 'eg. 5000 mAh' },
    { name: 'Fingerprint', label: 'Fingerprint', type: 'checkbox' },
]

// TODO: Refrigerators and Freezers, Ovens, Washing Machines


const charTemplates = {
    '67ab4d938bca21a3b8a19e06': laptop,
    '67a35499351f45a8c7773944': pc,
    '67d18c858883858d3a40554a': tv,
    '67d18c998883858d3a40554d': smartphoneOrTablet,
    '67d18ca68883858d3a405550': smartphoneOrTablet,
    // TODO: Add Refrigerators and Freezers, Ovens, Washing Machines
}

export default charTemplates;