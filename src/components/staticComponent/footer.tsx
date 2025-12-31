import AxionLogo from "@/assets/Axion Icon.svg?react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="flex w-full flex-col gap-4 p-12">
            <div className="flex h-fit w-full flex-col gap-6 xl:flex-row">
                <div className="flex xl:w-1/2 flex-col gap-2">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <AxionLogo className="aspect-square size-10" />
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
                                    <Link className="text-foreground" to="/">
                                        Begginer
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-foreground" to="/">
                                        Advanced
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-foreground" to="/">
                                        Professional
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-foreground" to="/">
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
                                    <Link className="text-foreground" to="/">
                                        GID
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-foreground" to="/">
                                        cPanel
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-foreground" to="/">
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
                                    <Link className="text-foreground" to="/">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-foreground" to="/">
                                        Signup
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div></div>
            </div>
            <hr className="p w-full" />
            <div className="w-full h-16">
                <p>Credit by Bernardusz, 2025</p>
            </div>
        </div>
    );
};

export default Footer;
