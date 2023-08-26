import OfferPost1 from "../OfferList/OfferPost1";
import NavBlock from "../../Mainpage/Navbar/NavBlock";
import OfferPost2 from "../OfferList/OfferPost2";
import OfferPost3 from "../OfferList/OfferPost3";
import OfferPostImg from "../OfferList/OfferPostImg";
import FooterBlock from "../../Mainpage/Footer/FooterBlock";
const OfferBlock = () => {
    return (
        <div>
            <NavBlock />
            <OfferPost1 />
            <OfferPost2 />
            <OfferPost3 />
            <OfferPostImg />
            <FooterBlock />
        </div>
    );
};
export default OfferBlock;
