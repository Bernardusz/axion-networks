// import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "@/pages";
import { useEffect } from "react";
import useMode from "@/context/mode";
import ProductsPage from "@/pages/products";
import PricingPage from "@/pages/pricing";
import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/signup";
import DefaultLayout from "@/layout/_layout";
import DashboardLayout from "@/layout/_dashboardLayout";
import DashboardPage from "@/pages/dashboard";
import DeploymentPage from "@/pages/deployment";
import SettingsPage from "@/pages/settings";

function App() {
	const mode = useMode((state) => state.mode)
	const toggleMode = useMode((state) => state.toggleMode)
	useEffect(() => {
		if (mode != "dark"){
			toggleMode()
		}
	}, [mode, toggleMode])
    return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout/>}>
					<Route index element={<HomePage/>}/>
					<Route path="products" element={<ProductsPage/>} />
					<Route path="pricing" element={<PricingPage/>}  />
					<Route path="login" element={<LoginPage/>}/>
					<Route path="signup" element={<SignUpPage/>}/>
				</Route>
				<Route element={<DashboardLayout/>}>
					<Route path="dashboard" element={<DashboardPage/>}/>
					<Route path="deployment" element={<DeploymentPage/>}/>
					<Route path="settings" element={<SettingsPage/>}/>
				</Route>
			</Routes>		
		</BrowserRouter>
    );
}

export default App;
