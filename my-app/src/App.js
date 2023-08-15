import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import MainPageBlock from "./components/Mainpage/MainPageBlock";
import AboutPageBlock from "./components/About/AboutPageBlock";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainPageBlock />} />
                <Route path="/about" element={<AboutPageBlock />} />
            </Routes>
        </div>
    );
}

export default App;
