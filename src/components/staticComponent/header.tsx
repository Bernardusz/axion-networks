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
        <header className="bg-background text-foreground fixed top-0 left-0 z-50 flex h-24 w-full max-w-full flex-row items-center justify-between border pl-8">
            <div className="flex w-full flex-row items-center justify-between">
                <AxionLogo
                    className="text-foreground aspect-square h-16 w-16"
                    onClick={() => navigate("/")}
                />
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
            <div className="flex w-20 items-center justify-center">
                {mode === "light" ? (
                    <CiSun
                        className="text-foreground size-12"
                        onClick={toggleMode}
                    />
                ) : (
                    <CiCloudMoon
                        className="text-foreground size-12"
                        onClick={toggleMode}
                    />
                )}
            </div>
            {isMobile ? <SidebarTrigger className="md:hidden" /> : null}
        </header>
    );
};

export default Header;
