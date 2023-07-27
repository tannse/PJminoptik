import "./App.css";
import NavBlock from "./components/Navbar/NavBlock";
import Hero from "./components/HeroLayer/Hero";
import ExtraNav from "./components/ExtraNav/ExtraNav";
import PcMenu from "./components/Navbar/PcMenu";

function App() {
    return (
        <div>
            <NavBlock />
            <PcMenu></PcMenu>
            <Hero />
            <ExtraNav />
        </div>
    );
}
export default App;
