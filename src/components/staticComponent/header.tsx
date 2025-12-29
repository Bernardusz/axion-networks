import AxionLogo from "@/assets/Axion Icon.svg?react";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
    const isMobile = useIsMobile();
    return (
        <header className="bg-background text-foreground fixed top-0 left-0 z-50 flex h-24 w-full flex-row items-center justify-between border px-8">
            <AxionLogo className="aspect-square h-16 w-16" />
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

            {isMobile ? <SidebarTrigger className="md:hidden" /> : null}
        </header>
    );
};

export default Header;
