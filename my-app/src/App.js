import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPageBlock from "./components/page/Mainpage/MainPageBlock";
import OfferBlock from "./components/page/Offer/Container/OfferBlock";
import VisioncareBlock from "./components/page/VisionCare/Container/VisioncareBlock";
import ErrorPage from "./components/Card UI/ErrorPage";
import AboutPageBlock from "./components/page/About/Container/AboutPageBlock";
import ShareLayout from "./components/Card UI/ShareLayout";
import WorkGlasses from "./components/page/WorkGlasses/Container/WorkGlasses";

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
                        <Route path="/WorkGlasses" element={<WorkGlasses />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
                <ScrollToCurrentLocation></ScrollToCurrentLocation>
            </Suspense>
        </div>
    );
}

export default App;
