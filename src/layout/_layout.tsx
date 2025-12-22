import { Outlet } from "react-router-dom"
import Header from "@/components/privateComponent/header";
import Hamburger from "@/components/privateComponent/hamburger";

const DefaultLayout = () => {
	return (
		<div className="page">
			<Header/>
			<Hamburger />
			<Outlet/>
		</div>
	)
}

export default DefaultLayout;