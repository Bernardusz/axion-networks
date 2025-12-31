import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import AxionLogo from "@/assets/Axion Icon.svg?react";

const SiteHeader = () => {
    const location = useLocation().pathname;
    const arrayLocation = location.split("/");
    const headerText = arrayLocation.at(-1) ?? "";
    const navigate = useNavigate();
    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-8 lg:gap-2 lg:px-6">
                {location === "/" ? (
                    <AxionLogo
                        className="text-foreground size-8"
                        onClick={() => navigate("/")}
                    />
                ) : (
                    <p>
                        {headerText?.charAt(0).toUpperCase() +
                            headerText?.slice(1)}
                    </p>
                )}
                <div className="ml-auto flex items-center gap-2">
                    <Button
                        variant="ghost"
                        asChild
                        size="sm"
                        className="hidden sm:flex"
                    >
                        <a
                            href="https://github.com/Bernardusz/axion-networks"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="dark:text-foreground"
                        >
                            GitHub
                        </a>
                    </Button>
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    <SidebarTrigger />
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
