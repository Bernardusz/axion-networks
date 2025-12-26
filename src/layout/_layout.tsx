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
import { SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/staticComponent/sidebarApp";
import Header from "@/components/staticComponent/header";
import Footer from "@/components/staticComponent/footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "sonner";
const DefaultLayout = () => {
	const isMobile = useIsMobile()
    return isMobile ? 
	(
        <SidebarProvider className="flex flex-col">
		<Header/>
		{isMobile && (
			<AppSidebar/>
		)}
		<main>
			<Outlet/>
		</main>
		<Footer/>
		</SidebarProvider>
	) : (
		<div className="page">
            <Header />
            <Outlet />
			<Toaster/>
            <Footer />
        </div>
	) 
};

export default DefaultLayout;
