import api from "../../../services/api";

export async function getCurrentUser() {
    const res = await api.get('/auth/user', null);
    return res.result.user;
}  