import { buildOptions } from "../utils/optionsUtil";
import api from "./api";

const endpoints = {
    gProducts: (page) => `/products/catalog?page=${page}`,
    gLatest: () => '/products/latest',
    gPages: () => '/products/catalog/pages'
}

async function getProducts(subcategoryId, page, signal) {
    const options = buildOptions({ subcategory: subcategoryId });
    return api.get(endpoints.gProducts(page), signal, options);
}

async function getPages(subcategoryId, signal) {
    const options = buildOptions({ subcategory: subcategoryId });
    return api.get(endpoints.gPages(), signal, options);
}

async function getLatestProducts(signal) {
    return api.get(endpoints.gLatest(), signal);
}


const productsService = {
    getProducts,
    getLatestProducts,
    getPages
}

export default productsService;