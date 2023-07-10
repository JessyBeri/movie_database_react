import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LikePage from "./pages/LikePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/like" element={<LikePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
