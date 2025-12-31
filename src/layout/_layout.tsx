// import { Outlet } from "react-router-dom";
// import Header from "@/components/staticComponent/header";
// import Hamburger from "@/components/staticComponent/hamburger";
// import Footer from "@/components/staticComponent/footer";
// import { Toaster } from "@/components/ui/sonner";

// const DefaultLayout = () => {
//     return (
//         <div className="page">
//             <Header />
//             <Hamburger />
//             <Toaster />
//             <Outlet />

//             <Footer />
//         </div>
//     );
// };

// export default DefaultLayout;

import { Outlet } from "react-router-dom";
import Header from "@/components/staticComponent/header";
import Footer from "@/components/staticComponent/footer";
import { Toaster } from "sonner";
import SiteHeader from "@/components/ui/site-header";

// import Header from "@/components/staticComponent/header";
// import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { PublicSidebar } from "@/components/staticComponent/publicSidebar";

const DefaultLayout = () => {
    const isMobile = useIsMobile();
    return isMobile ? (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            {/* <AppSidebar variant="inset" side={isMobile ? "right" : "left"} /> */}
            <PublicSidebar variant="inset" side={isMobile ? "right" : "left"} />
            <SidebarInset>
                <SiteHeader />

                <main className="w-full">
                    <Outlet />
                </main>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    ) : (
		<SidebarProvider className="page">
			<Header />
            <Outlet />
            <Toaster />
            <Footer />
		</SidebarProvider>
    );
};

export default DefaultLayout;
