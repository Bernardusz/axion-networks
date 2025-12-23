import AxionLogo from "@/assets/Axion Icon.svg?react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="flex h-140 w-full flex-col gap-6 px-4 pt-8">
            <AxionLogo className="aspect-square h-32 w-32 pl-8" />
            <div className="grid grid-cols-2 justify-center gap-8 px-8 xl:grid-cols-3">
                <div className="flex flex-col gap-4">
                    <h4>Pricing</h4>
                    <nav>
                        <ul className="flex flex-col justify-center gap-1">
                            <li>
                                <Link className="link-primary text-3xl" to="/">
                                    Begginer
                                </Link>
                            </li>
                            <li>
                                <Link className="link-primary text-3xl" to="/">
                                    Advanced
                                </Link>
                            </li>
                            <li>
                                <Link className="link-primary text-3xl" to="/">
                                    Professional
                                </Link>
                            </li>
                            <li>
                                <Link className="link-primary text-3xl" to="/">
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
                                <Link className="link-primary text-3xl" to="/">
                                    GID
                                </Link>
                            </li>
                            <li>
                                <Link className="link-primary text-3xl" to="/">
                                    cPanel
                                </Link>
                            </li>
                            <li>
                                <Link className="link-primary text-3xl" to="/">
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
                                <Link className="link-primary text-3xl" to="/">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link className="link-primary text-3xl" to="/">
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Footer;
