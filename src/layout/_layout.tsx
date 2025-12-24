import { Outlet } from "react-router-dom";
import Header from "@/components/staticComponent/header";
import Hamburger from "@/components/staticComponent/hamburger";
import Footer from "@/components/staticComponent/footer";
import { Toaster } from "@/components/ui/sonner";

const DefaultLayout = () => {
    return (
        <div className="page">
            <Header />
            <Hamburger />
			<Toaster/>
            <Outlet />
			
            <Footer />
        </div>
    );
};

export default DefaultLayout;
