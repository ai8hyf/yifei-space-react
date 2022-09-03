import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Research from "./pages/research";
import Influence from "./pages/influence";
import Portfolio from "./pages/portfolio";
import Music from "./pages/music";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/influence" element={<Influence />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/music" element={<Music />}/>
        </Routes>
    );
}