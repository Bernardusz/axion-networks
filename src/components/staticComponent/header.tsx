import AxionLogo from "@/assets/Axion Icon.svg?react";
import { BiMenu } from "react-icons/bi";
import useHamburger from "@/context/hamburger";
import { Link } from "react-router-dom";

const Header = () => {
    const toggleState = useHamburger(state => state.toggleState);
    const closeState = useHamburger(state => state.closeState);
    return (
        <header className="bg-background text-foreground fixed top-0 left-0 z-50 flex h-24 w-full flex-row items-center justify-between border px-8">
            <AxionLogo className="aspect-square h-16 w-16" />
            <nav className="hidden flex-row gap-4 xl:flex">
                <Link className="link-primary" onClick={closeState} to="/">
                    Home
                </Link>
                <Link
                    className="link-primary"
                    onClick={closeState}
                    to="/products"
                >
                    Products
                </Link>
                <Link
                    className="link-primary"
                    onClick={closeState}
                    to="/pricing"
                >
                    Pricing
                </Link>

                {/* <Button onClick={() => {closeState(); navigate("/")}}>
                    Home
                </Button>
                <Button onClick={() => {closeState(); navigate("/products")}}>
                    Products
                </Button>
                <Button onClick={() => {closeState(); navigate("/pricing")}}>
                    Pricing
                </Button> */}
            </nav>
            <nav className="hidden flex-row gap-4 xl:flex">
                {/* <Button onClick={() => {closeState(); navigate("/login")}}>
					Login
				</Button>
				<Button onClick={() => {closeState(); navigate("/signup")}}>
					Sign Up
				</Button> */}
                <Link className="link-primary" onClick={closeState} to="/login">
                    Login
                </Link>
                <Link
                    className="link-primary"
                    onClick={closeState}
                    to="/signup"
                >
                    Signup
                </Link>
            </nav>
            <BiMenu
                onClick={() => toggleState()}
                className="hover:text-primary flex text-6xl xl:hidden"
            />
        </header>
    );
};

export default Header;
