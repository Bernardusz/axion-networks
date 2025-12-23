import AxionLogo from "@/assets/Axion Icon.svg?react";
import { BiMenu } from "react-icons/bi";
import useHamburger from "@/context/hamburger";
const Header = () => {
    const toggleState = useHamburger(state => state.toggleState);
    return (
        <header className="bg-background text-foreground fixed top-0 left-0 z-50 flex h-24 w-full flex-row items-center justify-between border px-8">
            <AxionLogo className="aspect-square h-16 w-16" />
            <BiMenu
                onClick={() => toggleState()}
                className="hover:text-primary text-6xl"
            />
        </header>
    );
};

export default Header;
