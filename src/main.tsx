import { createHead, UnheadProvider } from "@unhead/react/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const head = createHead();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <UnheadProvider head={head}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UnheadProvider>
    </StrictMode>
);
