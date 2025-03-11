import api from "../../../../services/api";

const baseUrl = '/categories';

export function getCategories(signal) {
    return api.get(baseUrl, signal);
}