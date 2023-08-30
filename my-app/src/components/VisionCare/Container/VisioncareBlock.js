import React from "react";
import NavBlock from "../../Mainpage/Navbar/NavBlock";
import FooterBlock from "../../Mainpage/Footer/FooterBlock";
import VisionPost1 from "../VisionList/VisionPost1";
import VisionPost2 from "../VisionList/VisionPost2";
import VisionPost3 from "../VisionList/VisionPost3";
const VisioncareBlock = () => {
    return (
        <div>
            <NavBlock />
            <VisionPost1 />

            <VisionPost2 />

            <VisionPost3 />
            <FooterBlock />
        </div>
    );
};
export default VisioncareBlock;
