import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Spinner } from "./components/Card UI/Spinner";
const OfferBlock = React.lazy(() =>
    import("./components/page/Offer/Container/OfferBlock")
);
const VisioncareBlock = React.lazy(() =>
    import("./components/page/VisionCare/Container/VisioncareBlock")
);
const WorkGlasses = React.lazy(() =>
    import("./components/page/WorkGlasses/Container/WorkGlasses")
);
const GlassChild = React.lazy(() =>
    import("./components/page/GlassesChild/container/GlassChild")
);
const TorraOgon = React.lazy(() =>
    import("./components/page/TorraOgon/Container/TorraOgon")
);
const SunGlasses = React.lazy(() =>
    import("./components/page/SunGlasses/Container/SunGlasses")
);
const ErrorPage = React.lazy(() => import("./components/Card UI/ErrorPage"));
const ShareLayout = React.lazy(() =>
    import("./components/Card UI/ShareLayout")
);

const MainPage = React.lazy(() =>
    import("./components/page/Mainpage/Container/MainPage")
);
const Intro = React.lazy(() =>
    import("./components/page/Intro/Container/Intro")
);
const OptikLocation = React.lazy(() =>
    import("./components/page/OptikLocation/Container/OptikLocation")
);
const PartialPayment = React.lazy(() =>
    import("./components/page/PartialPayment/Container/PartialPay")
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
            <Suspense fallback={<Spinner />}>
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
                        <Route
                            path="/OptikLocation"
                            element={<OptikLocation />}
                        />
                        <Route
                            path="/PartialPayment"
                            element={<PartialPayment />}
                        />
                    </Route>
                </Routes>
                <ScrollToCurrentLocation></ScrollToCurrentLocation>
            </Suspense>
        </div>
    );
}

export default App;
