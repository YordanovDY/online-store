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

const refrigeratorOrFreezer = (values) => [
    { name: 'Energy Class', label: 'Energy Class', type: 'select', value: values?.['Energy Class'] || '', options: ['A+++', 'A++', 'A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] },
    { name: 'Type', label: 'Type', type: 'select', value: values?.['Type'] || '', options: ['Refrigerator with bottom frizer', 'Refrigerator upper freezer', 'Freezer'] },
    { name: 'Height', label: 'Height', type: 'text', placeholder: 'eg. 170 cm', value: values?.['Height'] || '' },
    { name: 'Width', label: 'Width', type: 'text', placeholder: 'eg. 54 cm', value: values?.['Width'] || '' },
    { name: 'Depth', label: 'Depth', type: 'text', placeholder: 'eg. 59.5 cm', value: values?.['Depth'] || '' },
    { name: 'Net Volume', label: 'Net Volume', type: 'text', placeholder: 'eg. 268 L', value: values?.['Net Volume'] || '' },
    { name: 'Color', label: 'Color', type: 'text', placeholder: 'eg. White', value: values?.['Color'] || '' },
]

const ovens = (values) => [
    { name: 'Energy Class', label: 'Energy Class', type: 'select', value: values?.['Energy Class'] || '', options: ['A+++', 'A++', 'A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] },
    { name: 'Cooking Functions', label: 'Cooking Functions', type: 'text', placeholder: 'eg. 8', value: values?.['Cooking Functions'] || '' },
    { name: 'Cavity Volume', label: 'Cavity Volume', type: 'text', placeholder: 'eg. 65 L', value: values?.['Cavity Volume'] || '' },
    { name: 'Fan', label: 'Fan', type: 'checkbox', checked: values?.['Fan'] || false },
    { name: 'Timer', label: 'Timer', type: 'checkbox', checked: values?.['Timer'] || false },
    { name: 'Telescopic Shelves', label: 'Telescopic Shelves', type: 'checkbox', checked: values?.['Telescopic Shelves'] || false },
]

const washingMachine = (values) => [
    { name: 'Energy Class', label: 'Energy Class', type: 'select', value: values?.['Energy Class'] || '', options: ['A+++', 'A++', 'A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G'] },
    { name: 'Washing capacity', label: 'Washing capacity', type: 'text', placeholder: 'eg. 7 kg', value: values?.['Washing capacity'] || '' },
    { name: 'Height', label: 'Height', type: 'text', placeholder: 'eg. 85 cm', value: values?.['Height'] || '' },
    { name: 'Width', label: 'Width', type: 'text', placeholder: 'eg. 60 cm', value: values?.['Width'] || '' },
    { name: 'Depth', label: 'Depth', type: 'text', placeholder: 'eg. 40 cm', value: values?.['Depth'] || '' },
    { name: 'Spin-RPM', label: 'Spin-RPM', type: 'text', placeholder: 'eg. 1200 RPM', value: values?.['Spin-RPM'] || '' },
    { name: 'Inverter Motor', label: 'Inverter Motor', type: 'checkbox', checked: values?.['Inverter Motor'] || false },
    { name: 'Steam Program', label: 'Steam Program', type: 'checkbox', checked: values?.['Steam Program'] || false },
    { name: 'Sound Power Level', label: 'Sound Power Level', type: 'text', placeholder: 'eg. 74 dB', value: values?.['Sound Power Level'] || '' },
]

export const charTemplates = {
    '67ab4d938bca21a3b8a19e06': laptop,
    '67a35499351f45a8c7773944': pc,
    '67d18c858883858d3a40554a': tv,
    '67d18c998883858d3a40554d': smartphoneOrTablet,
    '67d18ca68883858d3a405550': smartphoneOrTablet,
    '67b5c77f4ddf35084847d45c': refrigeratorOrFreezer,
    '67d18cc18883858d3a405553': ovens,
    '67d18ccd8883858d3a405556': washingMachine
}

export const baseProductTemplate = (values) => [
    { name: 'brand', label: 'Brand', type: 'text', placeholder: 'eg. Lenovo', value: values?.['brand'] || '' },
    { name: 'name', label: 'Name', type: 'text', placeholder: 'eg. Lenovo Legion 5 Pro', value: values?.['name'] || '' },
    { name: 'imageUrl', label: 'Image URL', type: 'text', placeholder: 'https://...', value: values?.['imageUrl'] || '' },
    { name: 'quantity', label: 'Initial Quantity', type: 'text', placeholder: 'eg. 50', value: values?.['quantity'] || '' },
    { name: 'price', label: 'Price', type: 'text', placeholder: 'eg. 1500.89$', value: values?.['price'] || '' },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'The Lenovo Legion 5 Pro is a gaming laptop designed for high performance...', value: values?.['description'] || '' },
]