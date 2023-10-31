import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/page/Mainpage/Container/MainPage";
import OfferBlock from "./components/page/Offer/Container/OfferBlock";
import VisioncareBlock from "./components/page/VisionCare/Container/VisioncareBlock";
import ErrorPage from "./components/Card UI/ErrorPage";
import Intro from "./components/page/Intro/Container/Intro";
import ShareLayout from "./components/Card UI/ShareLayout";
import WorkGlasses from "./components/page/WorkGlasses/Container/WorkGlasses";
import GlassChild from "./components/page/GlassesChild/container/GlassChild";
import TorraOgon from "./components/page/TorraOgon/Container/TorraOgon";
import SunGlasses from "./components/page/SunGlasses/Container/SunGlasses";
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
                    <Route path="/" element={<MainPage />} />
                    <Route element={<ShareLayout />}>
                        <Route path="/Introduction" element={<Intro />} />
                        <Route path="/Offer" element={<OfferBlock />} />
                        <Route
                            path="/VisionCare"
                            element={<VisioncareBlock />}
                        />
                        <Route path="/WorkGlasses" element={<WorkGlasses />} />
                        <Route path="/GlassChild" element={<GlassChild />} />
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="/TorraOgon" element={<TorraOgon />} />
                        <Route path="/SunGlasses" element={<SunGlasses />} />
                    </Route>
                </Routes>
                <ScrollToCurrentLocation></ScrollToCurrentLocation>
            </Suspense>
        </div>
    );
}

export default App;
