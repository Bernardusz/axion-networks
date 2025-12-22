import { create } from "zustand";

interface HamburgerState {
	isOpen: boolean
	toggleState: () => void
	closeState: () => void
}

const useHamburger = create<HamburgerState>()((set) => ({
	isOpen: false,
	toggleState: () => set((state) => ({ isOpen: !state.isOpen })),
	closeState: () => set(() => ({ isOpen: false }))
}))

export default useHamburger