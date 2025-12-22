import AxionLogo from "@/assets/Axion Icon.svg?react"
import { BiMenu } from "react-icons/bi"
import useHamburger from "@/context/hamburger";
const Header = () => {
	const toggleState = useHamburger((state) => state.toggleState)
	return (
		<header className="fixed w-full h-16 bg-background px-8 flex flex-row justify-between items-center text-foreground border z-50 top-0 left-0">
			<AxionLogo className="aspect-square w-12 h-12"/>
			<BiMenu onClick={() => toggleState()} className="text-4xl hover:text-primary" />
		</header>
	);
};

export default Header;