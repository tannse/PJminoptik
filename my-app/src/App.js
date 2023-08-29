import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPageBlock from "./components/Mainpage/MainPageBlock";
import AboutPageBlock from "./components/About/Container/AboutPageBlock";
import OfferBlock from "./components/Offer/Container/OfferBlock";
import VisioncareBlock from "./components/VisionCare/Container/VisioncareBlock";
import { useEffect } from "react";

function App() {
    const ScrollToCurrentLocation = () => {
        const location = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);
    };
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainPageBlock />} />
                <Route path="/About" element={<AboutPageBlock />} />
                <Route path="/Offer" element={<OfferBlock />} />
                <Route path="/VisionCare" element={<VisioncareBlock />} />
            </Routes>
            <ScrollToCurrentLocation></ScrollToCurrentLocation>
        </div>
    );
}

export default App;
