import ContainerData from "./ContainerOffer";
import OfferLens from "../Lens/OfferLens";
import NavBlock from "../../Mainpage/Navbar/NavBlock";
import AdvantagesLens from "../Lens/AdvantageLens";
const OfferBlock = () => {
    const offerTitle = ContainerData.offer.title;
    const offerDescription = ContainerData.offer.description;
    const advantagesTitle = ContainerData.advantages.title;
    const advantagesSubTitle = ContainerData.advantages.subTitle;

    return (
        <div>
            <NavBlock />
            <OfferLens
                offerTitle={offerTitle}
                offerDescription={offerDescription}
            />
            <AdvantagesLens
                advantagesTitle={advantagesTitle}
                advantagesSubTitle={advantagesSubTitle}
            />
        </div>
    );
};
export default OfferBlock;
