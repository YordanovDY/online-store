const laptop = (values) => [
    { name: 'RAM', label: 'RAM', type: 'text', placeholder: 'eg. 16 GB', value: values?.['RAM'] || '' },
    { name: 'HDD', label: 'HDD', type: 'text', placeholder: 'eg. 512 GB SSD', value: values?.['HDD'] },
    { name: 'CPU', label: 'CPU', type: 'text', placeholder: 'eg. Intel Core i7-10750H', value: values?.['CPU'] || '' },
    { name: 'GPU', label: 'GPU', type: 'text', placeholder: 'eg. Nvidia GTX 1650 Ti', value: values?.['GPU'] || '' },
    { name: 'Operating System', label: 'Operating System', type: 'text', placeholder: 'eg. Windows 11', value: values?.['Operating System'] || '' },
    { name: 'Battery', label: 'Battery', type: 'text', placeholder: 'eg. 86Wh', value: values?.['Battery'] || '' },
    { name: 'Display Size', label: 'Display Size', type: 'text', placeholder: 'eg. 15.6-inch', value: values?.['Display Size'] || '' },
]

const pc = (values) => [
    { name: 'RAM', label: 'RAM', type: 'text', placeholder: 'eg. 32 GB', value: values?.['RAM'] || '' },
    { name: 'HDD', label: 'HDD', type: 'text', placeholder: 'eg. 1 TB HDD', value: values?.['HDD'] || '' },
    { name: 'CPU', label: 'CPU', type: 'text', placeholder: 'eg. Intel Core i7-10750H', value: values?.['CPU'] || '' },
    { name: 'GPU', label: 'GPU', type: 'text', placeholder: 'eg. Nvidia GTX 1650 Ti', value: values?.['GPU'] || '' },
    { name: 'Operating System', label: 'Operating System', type: 'text', placeholder: 'eg. Windows 10 Pro', value: values?.['Operating System'] || '' },
]

const tv = (values) => [
    { name: 'Screen Technology', label: 'Screen Technology', type: 'text', placeholder: 'eg. LED TV', value: values?.['Screen Technology'] || '' },
    { name: 'Display Size', label: 'Display Size', type: 'text', placeholder: 'eg. 50-inch', value: values?.['Display Size'] || '' },
    { name: 'Resolution', label: 'Resolution', type: 'text', placeholder: 'eg. 4K ULTRA HD 3840 x 2160', value: values?.['Resolution'] || '' },
    { name: 'Picture Motion', label: 'Picture Motion', type: 'text', placeholder: 'eg. 60 Hz', value: values?.['Picture Motion'] || '' },
    { name: 'Smart TV', label: 'Smart TV', type: 'checkbox', checked: values?.['Smart TV'] || false },
]

const smartphoneOrTablet = (values) => [
    { name: 'CPU', label: 'CPU', type: 'text', placeholder: 'eg. Huawei Kirin 8000', value: values?.['CPU'] || '' },
    { name: 'RAM', label: 'RAM', type: 'text', placeholder: 'eg. 12 GB', value: values?.['RAM'] || '' },
    { name: 'Internal Memory', label: 'Internal Memory', type: 'text', placeholder: 'eg. 256 GB', value: values?.['Internal Memory'] || '' },
    { name: 'Display Size', label: 'Display Size', type: 'text', placeholder: 'eg. 6.7-inch', value: values?.['Display Size'] || '' },
    { name: 'Front Camera Resolution', label: 'Front Camera Resolution', type: 'text', placeholder: 'eg. 60 MP', value: values?.['Front Camera Resolution'] || '' },
    { name: 'Rear Camera Resolution', label: 'Rear Camera Resolution', type: 'text', placeholder: 'eg. 50+8 MP', value: values?.['Rear Camera Resolution'] || '' },
    { name: 'Battery', label: 'Battery', type: 'text', placeholder: 'eg. 5000 mAh', value: values?.['Battery'] || '' },
    { name: 'Fingerprint', label: 'Fingerprint', type: 'checkbox', checked: values?.['Fingerprint'] || false },
    { name: '5G', label: '5G', type: 'checkbox', checked: values?.['5G'] || false },
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