import { Outlet } from "react-router-dom";
import Header from "@/components/staticComponent/header";
import Hamburger from "@/components/staticComponent/hamburger";
import Footer from "@/components/staticComponent/footer";

const DefaultLayout = () => {
    return (
        <div className="page">
            <Header />
            <Hamburger />
            <Outlet />
			<Footer/>
        </div>
    );
};

export default DefaultLayout;
