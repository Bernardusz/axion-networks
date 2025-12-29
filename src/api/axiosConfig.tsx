import axios from "axios";
import useAuth from "@/context/useAuth";
import { Navigate } from "react-router-dom";

const api = axios.create({
    baseURL: "http://yoururl.com",
    timeout: 5000,
});

api.interceptors.request.use(async config => {
    const accessToken = useAuth.getState().accessToken;
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (!originalRequest._retry && error.response?.status === 401) {
            originalRequest._retry = true;
            const { refreshToken, mode, setAuth } = useAuth.getState();
            try {
                const response = await axios.post(
                    "http://localhost:8000/api/token/refresh/",
                    {
                        refrsh: refreshToken,
                    }
                );
                setAuth({
                    accessToken: response.data.access,
                    refreshToken: response.data.refresh,
                    mode,
                });
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                return axios(originalRequest);
            } catch (_err) {
                useAuth.getState().clearAuth();
                Navigate({ to: "/login" });
                return Promise.reject(_err);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
