import FooterBlock from "../../Mainpage/Footer/FooterBlock";
import AboutTopContent from "../TopContent/AboutTopContent";
import NavBlock from "../../Mainpage/Navbar/NavBlock";
import MiddleContentData from "../MiddleContent/MidleContentData";
import BottomContentData from "../BottomContent/BottomContentData";
const AboutPageBlock = () => {
    return (
        <div>
            <NavBlock />
            <AboutTopContent></AboutTopContent>
            <MiddleContentData></MiddleContentData>
            <BottomContentData></BottomContentData>
            <FooterBlock />
        </div>
    );
};
export default AboutPageBlock;
