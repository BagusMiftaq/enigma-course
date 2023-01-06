import {saveToken} from "../utils/token";
import api from "../config/api"

export const login = async (data) => {
    try {
        const response = await api.post("/auth/login", data)
        const token = response?.data?.data;
        console.log(response)
        if (token){
            saveToken({token});
        }
    } catch (e) {
        console.error(e);
    }
}