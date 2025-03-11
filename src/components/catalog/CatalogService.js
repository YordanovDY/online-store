import api from "../../services/api";
import { buildOptions } from "../../utils/optionsUtil";


const endpoints = {
    gProducts: (page) => `/products/catalog?page=${page}`,
    gPages: () => '/products/catalog/pages'
}

export function getProducts(subcategoryId, page, signal) {
    const options = buildOptions({ subcategory: subcategoryId });
    return api.get(endpoints.gProducts(page), signal, options);
}

export function getPages(subcategoryId, signal) {
    const options = buildOptions({ subcategory: subcategoryId });
    return api.get(endpoints.gPages(), signal, options);
}