import api from "./api"

const endpoints = {
    gCategories: () => '/categories'
}

function getCategories() {
    return api.get(endpoints.gCategories());
}

const categoriesService = {
    getCategories
}

export default categoriesService;