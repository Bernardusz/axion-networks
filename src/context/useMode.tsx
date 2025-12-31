import { create } from "zustand";
interface ModeState {
    mode: "dark" | "light";
    toggleMode: () => void;
	isInitialized: boolean
	initializeMode: () => void
	setModeDark: () => void
	setModeLight: () => void
}

const useMode = create<ModeState>()((set, get) => ({
    mode: "light",
	isInitialized: false,
    toggleMode: () => {
        if (get().mode === "dark") {
			get().setModeLight();
        } 
		else {
            get().setModeDark();

		}
    },
	setModeDark: () => {
        const html = document.documentElement;
		html.classList.add("dark");
		localStorage.setItem("lightOrDark", "dark");
        set(() => ({
            mode: "dark",
        }));
    },
	setModeLight: () => {
        const html = document.documentElement;
		html.classList.remove("dark");
		localStorage.setItem("lightOrDark", "light");
        set(() => ({
            mode: "light"
        }));
    },
	initializeMode: () => {
		const userMode = localStorage.getItem("lightOrDark");
		if (userMode === "light"){
			get().setModeLight();
		}
		else {
			get().setModeDark();
		}
		set(() => ({
			isInitialized: true
		}))
	},
}));

export default useMode;
