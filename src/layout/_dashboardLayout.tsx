import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/staticComponent/sidebarApp";
import Header from "@/components/staticComponent/header";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <Header />
            <AppSidebar />
            <main className="h-fit w-full">
                <Outlet />
            </main>
        </SidebarProvider>
    );
};

export default DashboardLayout;
