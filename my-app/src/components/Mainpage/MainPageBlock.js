import NavBlock from "./Navbar/NavBlock";
import Hero from "./HeroLayer/Hero";
import ExtraNav from "./ExtraNav/ExtraNav";
import BlockContent from "./MainContent/Blockcontent";
import FooterBlock from "./Footer/FooterBlock";
import React, { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";

const MainPageBlock = () => {
    const [Loading, setLoading] = useState("true");
    const ComponentStyle = {
        opacity: Loading ? 0 : 1,
        transition: "opacity 0.8s",
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div style={ComponentStyle}>
            <NavBlock />
            {Loading ? (
                ""
            ) : (
                <div>
                    <Hero />
                    <ExtraNav />
                    <BlockContent />
                    <FooterBlock />
                </div>
            )}
        </div>
    );
};
export default MainPageBlock;
