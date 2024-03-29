import axios from "axios";
const AxiosClient = axios.create({
    baseURL: "https://fphone-api.vercel.app/api/",
});

AxiosClient.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem("persist:auth") && JSON.parse(window.localStorage.getItem("persist:auth"))?.token?.slice(1, -1)
        console.log(token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosClient;