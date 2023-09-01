import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPageBlock from "./components/Mainpage/MainPageBlock";
import OfferBlock from "./components/Offer/Container/OfferBlock";
import VisioncareBlock from "./components/VisionCare/Container/VisioncareBlock";

import React, { useEffect } from "react";
const LazyAbout = React.lazy(() =>
    import("../src/components/About/Container/AboutPageBlock")
);

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
                <Route
                    path="/About"
                    element={
                        <React.Suspense fallback="Loading...">
                            <LazyAbout></LazyAbout>
                        </React.Suspense>
                    }
                />
                <Route path="/Offer" element={<OfferBlock />} />
                <Route path="/VisionCare" element={<VisioncareBlock />} />
            </Routes>
            <ScrollToCurrentLocation></ScrollToCurrentLocation>
        </div>
    );
}

export default App;
