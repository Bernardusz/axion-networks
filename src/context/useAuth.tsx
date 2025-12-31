import { create } from "zustand";

type authState = {
    isInitialized: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    mode: "local" | "session";
    initializeAuth: () => void;
    setAuth: (params: {
        accessToken: string;
        refreshToken: string;
        mode: "local" | "session";
    }) => void;
    clearAuth: () => void;
};

const useAuth = create<authState>()((set, get) => ({
    isInitialized: true,
    accessToken: null,
    refreshToken: null,
    mode: "session",

    setAuth: ({ accessToken, refreshToken, mode }) => {
        if (mode === "local") {
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
            sessionStorage.clear();
        } else {
            sessionStorage.setItem("access_token", accessToken);
            sessionStorage.setItem("refresh_token", refreshToken);
            localStorage.clear();
        }
        set({ accessToken, refreshToken, mode });
    },
    clearAuth: () => {
        localStorage.clear();
        sessionStorage.clear();
        set({
            accessToken: null,
            refreshToken: null,
            mode: "session",
            isInitialized: true,
        });
    },
    initializeAuth: () => {
        const accessToken =
            sessionStorage.getItem("access_token") ||
            localStorage.getItem("access_token");
        const refreshToken =
            sessionStorage.getItem("refresh_token") ||
            localStorage.getItem("refresh_token");

        if (!accessToken || !refreshToken) {
            get().clearAuth();
            return;
        }

        const mode = sessionStorage.getItem("access_token")
            ? "session"
            : "local";

        set({
            accessToken,
            refreshToken,
            mode,
            isInitialized: true,
        });
    },
}));

export default useAuth;
