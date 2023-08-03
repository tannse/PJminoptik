import "./App.css";
import NavBlock from "./components/Navbar/NavBlock";
import Hero from "./components/HeroLayer/Hero";
import ExtraNav from "./components/ExtraNav/ExtraNav";
import PcMenu from "./components/Navbar/PcMenu";
import BlockContent from "./components/MainContent/Blockcontent";
import FooterBlock from "./components/Footer/Footercontent";

function App() {
    return (
        <div>
            <NavBlock />
            <PcMenu></PcMenu>
            <Hero />
            <ExtraNav />
            <BlockContent />
            <FooterBlock />
        </div>
    );
}
export default App;
