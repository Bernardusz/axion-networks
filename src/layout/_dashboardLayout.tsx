import { Outlet } from "react-router-dom";
// import Header from "@/components/staticComponent/header";
import { AppSidebar } from "@/components/ui/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardLayout = () => {
	const isMobile = useIsMobile();
    return (
		    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" side={isMobile ? "right" : "left"} />
      <SidebarInset>
			<main>
				<Outlet/>
			</main>
      </SidebarInset>
    </SidebarProvider>

    );
};

export default DashboardLayout;
