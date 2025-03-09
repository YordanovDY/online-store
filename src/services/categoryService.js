import api from "./api"

const endpoints = {
    gCategories: () => '/categories'
}

function getCategories(signal) {
    return api.get(endpoints.gCategories(), signal);
}

const categoriesService = {
    getCategories
}

export default categoriesService;