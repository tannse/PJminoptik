import "./App.css";
import NavBlock from "./components/Navbar/NavBlock";
import Hero from "./components/HeroLayer/Hero";
import ExtraNav from "./components/ExtraNav/ExtraNav";
import PcMenu from "./components/Navbar/PcMenu";
import MainContent from "./components/MainContent/MainContent";
function App() {
    return (
        <div className="overflow-hidden">
            <NavBlock />
            <PcMenu></PcMenu>
            <Hero />
            <ExtraNav />
            <MainContent />
        </div>
    );
}
export default App;
