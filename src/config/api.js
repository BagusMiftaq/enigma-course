import axios, {interceptors} from "axios";
import {getToken, removeToken} from "../utils/token";
import config from "bootstrap/js/src/util/config";


const axiosInstance = axios.create({
    // baseURL: "http://localhost:8888",
    headers: {
        "Content-type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if(token){
          config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    (error)=> Promise.reject(error)
)

axiosInstance.interceptors.request.use(
    (config)=> config,
    (error)=>{
        const responceError = error?.response?.data;
        if (responceError.code === "X06") {
            removeToken();
        }
        return Promise.reject(error);
    }
)


export default axiosInstance;