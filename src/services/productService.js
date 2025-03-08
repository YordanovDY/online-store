import { buildOptions } from "../utils/optionsUtil";
import api from "./api";

const endpoints = {
    gProducts: (page) => `/products/catalog?page=${page}`,
    gLatest: () => '/products/latest'
}

async function getProducts(subcategoryId, page) {
    const options = buildOptions({ subcategory: subcategoryId });    
    return api.get(endpoints.gProducts(page), options);
}

async function getLatestProducts() {
    return api.get(endpoints.gLatest());
}


const productsService = {
    getProducts,
    getLatestProducts
}

export default productsService;