import AxionLogo from "@/assets/Axion Icon.svg?react";
import { Link } from "react-router-dom";
const Footer = () => {
	return(
        <footer className="w-full border-y flex justify-center flex-col items-center mt-16">
            <div className="flex w-full max-w-400 flex-col justify-center gap-4 p-12 mt-4">
				<div className="flex h-fit w-full flex-col gap-6 xl:flex-row">
                <div className="flex flex-col gap-2 xl:w-1/2">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <AxionLogo className="aspect-square size-10 text-foreground" />
                        <h4>Axion Networks</h4>
                    </div>
                    <p>A secure and robust VPS with 100% uptime.</p>
                </div>
                <div className="flex flex-col justify-between gap-8 md:w-full md:flex-row xl:w-1/2 xl:gap-16 xl:px-16">
                    <div className="flex flex-col gap-4">
                        <h4>Pricing</h4>
                        <nav>
                            <ul className="flex flex-col justify-center gap-1">
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/pricing"
                                    >
                                        Begginer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/pricing"
                                    >
                                        Advanced
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/pricing"
                                    >
                                        Professional
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/pricing"
                                    >
                                        Enterprise
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4>Products</h4>
                        <nav>
                            <ul className="flex flex-col justify-center gap-1">
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/products"
                                    >
                                        GID
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/products"
                                    >
                                        cPanel
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/products"
                                    >
                                        VPS
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4>Get Started</h4>
                        <nav>
                            <ul className="flex flex-col justify-center gap-1">
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-foreground"
                                        to="/signup"
                                    >
                                        Signup
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div></div>
            </div>
			</div>
        </footer>
    );
};

export default Footer;
