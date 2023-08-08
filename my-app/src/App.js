import "./App.css";
import NavBlock from "./components/Navbar/NavBlock";
import Hero from "./components/HeroLayer/Hero";
import ExtraNav from "./components/ExtraNav/ExtraNav";
import PcMenu from "./components/Navbar/PcMenu";
import BlockContent from "./components/MainContent/Blockcontent";
import FooterBlock from "./components/Footer/Footercontent";
import FooterBlockPC from "./components/Footer/FooterContentPC";

function App() {
    return (
        <div>
            <NavBlock />
            <PcMenu></PcMenu>
            <Hero />
            <ExtraNav />
            <BlockContent />
            <FooterBlock />
            <FooterBlockPC />
        </div>
    );
}
export default App;
