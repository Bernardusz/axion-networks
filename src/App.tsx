import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import useMode from "@/context/useMode";
import ProductsPage from "@/pages/products";
import PricingPage from "@/pages/pricing";
import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/signup";
import DefaultLayout from "@/layout/_layout";
import DashboardLayout from "@/layout/_dashboardLayout";
import DeploymentPage from "@/pages/deployment";
import SettingsPage from "@/pages/settings";
import ProductsGidPage from "@/pages/products.gid";
import ProductsCpanelPage from "@/pages/products.cpanel";
import ProductsVpsPage from "@/pages/products.vps";
import PublicOnlyRoute from "@/routing/publicOnlyRoute";
import ProtectedRoute from "@/routing/protectedRoute";
import HomePage from "@/pages";
import DashboardPage from "@/pages/dashboard";

function App() {
    const mode = useMode(state => state.mode);
    const toggleMode = useMode(state => state.toggleMode);
    useEffect(() => {
        if (mode != "dark") {
            toggleMode();
        }
    }, [mode, toggleMode]);
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="products/gid" element={<ProductsGidPage />} />
                    <Route
                        path="products/cpanel"
                        element={<ProductsCpanelPage />}
                    />
                    <Route path="products/vps" element={<ProductsVpsPage />} />
                </Route>
                <Route element={<DefaultLayout />}>
					<Route element={<PublicOnlyRoute />}>
						<Route path="login" element={<LoginPage />} />
						<Route path="signup" element={<SignUpPage />} />
					</Route>
				</Route>
				
                <Route element={<ProtectedRoute />}>
                    <Route path="dashboard" element={<DashboardLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="deployment" element={<DeploymentPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
