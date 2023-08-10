import NavBlock from "./Navbar/NavBlock";
import Hero from "./HeroLayer/Hero";
import ExtraNav from "./ExtraNav/ExtraNav";
import BlockContent from "./MainContent/Blockcontent";
import FooterBlock from "./Footer/Footercontent";
import FooterBlockPC from "./Footer/FooterContentPC";

const MainPageBlock = () => {
    return (
        <div>
            <NavBlock />

            <Hero />
            <ExtraNav />
            <BlockContent />
            <FooterBlock />
            <FooterBlockPC />
        </div>
    );
};
export default MainPageBlock;
