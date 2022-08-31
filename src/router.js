import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Research from "./pages/research";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/research" element={<Research />} />
            {/* <Route path="about" element={<About />} /> */}
        </Routes>
    );
}