import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Products",
        url: "products",
        icon: Inbox,
    },
    {
        title: "pricing",
        url: "/pricing",
        icon: Calendar,
    },
    {
        title: "login",
        url: "/login",
        icon: Search,
    },
    {
        title: "signup",
        url: "/signup",
        icon: Settings,
    },
];

const AppSidebar = ({ className }: { className?: string }) => {
    const { isMobile, toggleSidebar } = useSidebar();
    return (
        <Sidebar
            side={isMobile ? "right" : "left"}
            className={className}
            variant="sidebar"
            collapsible="icon"
        >
            <SidebarHeader />
            <SidebarContent className="mt-24">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem
                                    key={item.title}
                                    className="h-10zo w-full"
                                >
                                    <SidebarMenuButton asChild>
                                        <Link
                                            to={item.url}
                                            onClick={toggleSidebar}
                                        >
                                            <item.icon />
                                            <span>
                                                <h4>{item.title}</h4>
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
