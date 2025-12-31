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

const data = {
    // user: {
    // 	name: "shadcn",
    // 	email: "m@example.com",
    // 	avatar: "/avatars/shadcn.jpg",
    // },
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
    // navClouds: [
    // 	{
    // 		title: "Capture",
    // 		icon: IconCamera,
    // 		isActive: true,
    // 		url: "#",
    // 		items: [
    // 			{
    // 				title: "Active Proposals",
    // 				url: "#",
    // 			},
    // 			{
    // 				title: "Archived",
    // 				url: "#",
    // 			},
    // 		],
    // 	},
    // 	{
    // 		title: "Proposal",
    // 		icon: IconFileDescription,
    // 		url: "#",
    // 		items: [
    // 			{
    // 				title: "Active Proposals",
    // 				url: "#",
    // 			},
    // 			{
    // 				title: "Archived",
    // 				url: "#",
    // 			},
    // 		],
    // 	},
    // 	{
    // 		title: "Prompts",
    // 		icon: IconFileAi,
    // 		url: "#",
    // 		items: [
    // 			{
    // 				title: "Active Proposals",
    // 				url: "#",
    // 			},
    // 			{
    // 				title: "Archived",
    // 				url: "#",
    // 			},
    // 		],
    // 	},
    // ],
    // navSecondary: [
    // 	{
    // 		title: "Settings",
    // 		url: "#",
    // 		icon: IconSettings,
    // 	},
    // 	{
    // 		title: "Get Help",
    // 		url: "#",
    // 		icon: IconHelp,
    // 	},
    // 	{
    // 		title: "Search",
    // 		url: "#",
    // 		icon: IconSearch,
    // 	},
    // ],
    // documents: [
    // 	{
    // 		name: "ESP32-Apps",
    // 		url: "#",
    // 		icon: IconDatabase,
    // 	},
    // 	{
    // 		name: "Axion Networks",
    // 		url: "#",
    // 		icon: IconReport,
    // 	},
    // 	{
    // 		name: "Velix",
    // 		url: "#",
    // 		icon: IconFileWord,
    // 	},
    // ],
};
import AxionIcon from "@/assets/Axion Icon.svg?react";
import { Link } from "react-router-dom";

export function PublicSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { toggleSidebar } = useSidebar();
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            variant="default"
                            className="data-[slot=sidebar-menu-button]:p-1"
                            size="lg"
                        >
                            <Link
                                to="/"
                                onClick={() => toggleSidebar()}
                                className="flex h-20 flex-row items-center"
                            >
                                <AxionIcon className="text-foreground h-20 w-20" />
                                <span className="text-2xl font-semibold">
                                    Axion Networks
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavDocuments items={data.documents} /> */}
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
        </Sidebar>
    );
}
