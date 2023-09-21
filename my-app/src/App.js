import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPageBlock from "./components/Mainpage/MainPageBlock";
import OfferBlock from "./components/Offer/Container/OfferBlock";
import VisioncareBlock from "./components/VisionCare/Container/VisioncareBlock";
import ErrorPage from "./components/Card UI/ErrorPage";
import AboutPageBlock from "./components/About/Container/AboutPageBlock";
import ShareLayout from "./components/Card UI/ShareLayout";

function App() {
    const ScrollToCurrentLocation = () => {
        const location = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);
    };
    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageBlock />} />
                    <Route element={<ShareLayout />}>
                        <Route path="/About" element={<AboutPageBlock />} />
                        <Route path="/Offer" element={<OfferBlock />} />
                        <Route
                            path="/VisionCare"
                            element={<VisioncareBlock />}
                        />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
                <ScrollToCurrentLocation></ScrollToCurrentLocation>
            </Suspense>
        </div>
    );
}

export default App;
