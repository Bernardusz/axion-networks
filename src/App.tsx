// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Index";

function App() {
    return (
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    );
}

export default App;
