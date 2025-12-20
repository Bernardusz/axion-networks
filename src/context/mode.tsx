import { create } from "zustand";
interface ModeState {
    mode: "dark" | "light";
    toggleMode: () => void;
}

const useMode = create<ModeState>()((set, get) => ({
    mode: "dark",
    toggleMode: () => {
		const html = document.documentElement;
		if (get().mode === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
		set((state) => ({
			mode: state.mode === "dark" ? "light" : "dark"
		}))
	}
}));

export default useMode;
