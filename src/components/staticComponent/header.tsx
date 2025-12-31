import AxionLogo from "@/assets/Axion Icon.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { CiCloudMoon } from "react-icons/ci";
import useMode from "@/context/useMode";
import { CiSun } from "react-icons/ci";



const Header = () => {
    const isMobile = useIsMobile();
	const navigate = useNavigate();
	const mode = useMode(state => state.mode);
    const toggleMode = useMode(state => state.toggleMode);
    return (
        <header className="flex flex-row fixed top-0 left-0 z-50 h-24 w-full bg-background text-foreground items-center justify-between border pl-8 max-w-full">
			<div className="flex flex-row items-center justify-between w-full">
				<AxionLogo className="aspect-square h-16 w-16 text-foreground" onClick={() => navigate("/")}/>
            <nav className="hidden flex-row gap-4 md:flex">
                <Link className="link-primary" to="/">
                    Home
                </Link>
                <Link className="link-primary" to="/products">
                    Products
                </Link>
                <Link className="link-primary" to="/pricing">
                    Pricing
                </Link>
            </nav>
            <nav className="hidden flex-row gap-4 md:flex">
                <Link className="link-primary" to="/login">
                    Login
                </Link>
                <Link className="link-primary" to="/signup">
                    Signup
                </Link>
            </nav>
			</div>
			<div className="w-20 flex justify-center items-center">
			{mode === "light" ? <CiSun className="text-foreground size-12" onClick={toggleMode}/> : <CiCloudMoon className="text-foreground size-12" onClick={toggleMode}/>}
			</div>
            {isMobile ? <SidebarTrigger className="md:hidden" /> : null}
        </header>
    );
};

export default Header;
