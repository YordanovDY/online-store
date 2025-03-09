import { buildOptions } from "../utils/optionsUtil";
import api from "./api";

const endpoints = {
    gProducts: (page) => `/products/catalog?page=${page}`,
    gLatest: () => '/products/latest'
}

async function getProducts(subcategoryId, page, signal) {
    const options = buildOptions({ subcategory: subcategoryId });
    return api.get(endpoints.gProducts(page), signal, options);
}

async function getLatestProducts(signal) {
    return api.get(endpoints.gLatest(), signal);
}


const productsService = {
    getProducts,
    getLatestProducts
}

export default productsService;