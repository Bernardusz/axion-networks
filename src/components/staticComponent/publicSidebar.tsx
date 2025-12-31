import * as React from "react";
import {
    // IconCamera,
    IconChartBar,
    IconDashboard,
    // IconDatabase,
    // IconFileAi,
    // IconFileDescription,
    // IconFileWord,
    IconFolder,
    // IconHelp,
    IconListDetails,
    // IconReport,
    // IconSearch,
    // IconSettings,
    IconUsers,
} from "@tabler/icons-react";

// import { NavDocuments } from "@/components/ui/nav-documents";
import { NavMain } from "@/components/ui/nav-main";
// import { NavSecondary } from "@/components/ui/nav-secondary";
// import { NavUser } from "@/components/ui/nav-user";
import useMode from "@/context/useMode";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";
const data = {
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: IconDashboard,
        },
        {
            title: "Products",
            url: "/products",
            icon: IconListDetails,
        },
        {
            title: "Pricing",
            url: "/pricing",
            icon: IconChartBar,
        },
        {
            title: "Login",
            url: "/login",
            icon: IconFolder,
        },
        {
            title: "Sign Up",
            url: "/signup",
            icon: IconUsers,
        },
    ],
};
import AxionIcon from "@/assets/Axion Icon.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PublicSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { toggleSidebar } = useSidebar();
    const navigate = useNavigate();
	const {mode, toggleMode} = useMode();
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex flex-row">
                        <SidebarMenuButton
							size="default"
                            asChild
                            variant="default"
                            className="data-[slot=sidebar-menu-button]:p-1 flex flex-col"
                        >
                            <Link
                                to="/"
                                onClick={() => toggleSidebar()}
                                className="flex h-20 flex-row items-center"
                            >
                                <AxionIcon className="text-foreground size-20" />
                                <span className="text-2xl font-semibold">
                                    Axion Networks
                                </span>
                            </Link>
                        </SidebarMenuButton>
						<div className="w-20 flex justify-center items-center">
							{mode === "light" ? <CiSun className="text-foreground size-8" onClick={toggleMode}/> : <CiCloudMoon className="text-foreground size-8" onClick={toggleMode}/>}
						</div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <Button className="mb-8" onClick={() => navigate("/dashboard") }>
                    Go to Dashboard
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
