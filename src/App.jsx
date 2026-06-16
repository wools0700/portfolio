import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./css/home.css";

function App() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;