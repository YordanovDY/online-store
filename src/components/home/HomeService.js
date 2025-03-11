import api from "../../services/api";

const latestProductsUrl = '/products/latest';

export function getLatestProducts(signal) {
    return api.get(latestProductsUrl, signal);
}