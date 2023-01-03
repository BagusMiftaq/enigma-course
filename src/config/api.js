import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:8888",
    headers: {
        "Content-type" : "application/json"
    }
})

export default axiosInstance;