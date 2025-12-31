import * as React from "react";
import {
    IconChartBar,
    IconDashboard,
    IconDatabase,
    IconFileWord,
    IconFolder,
    IconHelp,
    IconListDetails,
    IconReport,
    IconSearch,
    IconSettings,
    IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/ui/nav-documents";
import { NavMain } from "@/components/ui/nav-main";
import { NavSecondary } from "@/components/ui/nav-secondary";
import { NavUser } from "@/components/ui/nav-user";
import useMode from "@/context/useMode";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Deployment",
            url: "#",
            icon: IconListDetails,
        },
        {
            title: "Traffic",
            url: "#",
            icon: IconChartBar,
        },
        {
            title: "Applications",
            url: "#",
            icon: IconFolder,
        },
        {
            title: "Team",
            url: "#",
            icon: IconUsers,
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: IconSearch,
        },
    ],
    documents: [
        {
            name: "ESP32-Apps",
            url: "#",
            icon: IconDatabase,
        },
        {
            name: "Axion Networks",
            url: "#",
            icon: IconReport,
        },
        {
            name: "Velix",
            url: "#",
            icon: IconFileWord,
        },
    ],
};
import AxionIcon from "@/assets/Axion Icon.svg?react";
import { Link } from "react-router-dom";
// import { useIsMobile } from "@/hooks/use-mobile";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    // const isMobile = useIsMobile();
	const mode = useMode(state => state.mode);
	const toggleMode = useMode(state => state.toggleMode);
	return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="flex flex-row items-center">
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1."
                        >
                            <Link
                                to="/"
                                className="flex h-10 flex-row items-center"
                            >
                                <AxionIcon className="text-foreground size-16" />
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
                <NavDocuments items={data.documents} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
