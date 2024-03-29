import AxiosClient from "./AxiosClient";

const AuthApi = {
    login: (data) => {
        const url = "/auth/admin-login";
        return AxiosClient.post(url, data);
    },
}


export default AuthApi;
