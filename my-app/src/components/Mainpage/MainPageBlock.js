import NavBlock from "./Navbar/NavBlock";
import Hero from "./HeroLayer/Hero";
import ExtraNav from "./ExtraNav/ExtraNav";
import BlockContent from "./MainContent/Blockcontent";
import FooterBlock from "./Footer/FooterBlock";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShowComponent } from "../Card UI/Animation";

const MainPageBlock = () => {
    const [Loading, setLoading] = useState("true");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <motion.div {...ShowComponent}>
            <NavBlock />
            {Loading ? (
                ""
            ) : (
                <motion.div {...ShowComponent}>
                    <Hero />
                    <ExtraNav />
                    <BlockContent />
                    <FooterBlock />
                </motion.div>
            )}
        </motion.div>
    );
};
export default MainPageBlock;
