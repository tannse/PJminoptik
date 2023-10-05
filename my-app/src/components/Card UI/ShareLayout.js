import Header from "../page/Mainpage/Header/Container/Header";
import FooterBlock from "../page/Mainpage/Footer/FooterBlock";
import { Outlet } from "react-router-dom";
const ShareLayout = ({ children }) => {
    return (
        <div>
            <header>
                <Header></Header>
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
