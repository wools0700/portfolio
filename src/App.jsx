import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";

import "./css/home.css";
import "./css/detail.css";

function App() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project1" element={<Project1 />} />
                <Route path="/project2" element={<Project2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;