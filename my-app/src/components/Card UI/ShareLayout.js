import NavBlock from "../page/Mainpage/Navbar/NavBlock";
import FooterBlock from "../page/Mainpage/Footer/FooterBlock";
import { Outlet } from "react-router-dom";
const ShareLayout = ({ children }) => {
    return (
        <div>
            <header>
                <NavBlock></NavBlock>
            </header>

            <main>
                <Outlet />
            </main>
            <footer>
                <FooterBlock></FooterBlock>
            </footer>
        </div>
    );
};
export default ShareLayout;