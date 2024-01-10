import { useState } from "react";
import MenuItem from "../MenuItem";
import { MenuDatas } from "../MenuData";
import useScroll from "../../../../../Card UI/HandleScroll";
const NavBar = (props) => {
    const { activeMenu, setActiveMenu } = props;
    const scrollPosition = useScroll();
    const [openSubMenu, setSubOpenMenu] = useState(false);
    const closeNav = () => {
        setActiveMenu(!activeMenu);
    };

    const handleOpenSubMenu = (index) => {
        if (openSubMenu === index) {
            setSubOpenMenu(!openSubMenu);
        } else {
            setSubOpenMenu(index);
        }
    };

    return (
        <nav
            className={`z-[10000] fixed top-[10%] w-[100%] h-[100vh] Hidden-scroll-bar overflow-y-auto transition-all ease-linear duration-100  dt:hidden border-b-white bg-premierColor ${
                activeMenu ? "NavBar_SubItem--active" : "NavBar-SubItem--close"
            }`}
        >
            <ul className=" mt-[4rem] z-[4000]">
                {MenuDatas.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={{ ...item, index }}
                        handleOpenSubMenu={handleOpenSubMenu}
                        closeNav={closeNav}
                        openSubMenu={openSubMenu}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
