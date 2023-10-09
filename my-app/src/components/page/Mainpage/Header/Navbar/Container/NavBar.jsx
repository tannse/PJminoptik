import { BiHomeHeart } from "react-icons/bi";
import { useState, useRef } from "react";
import { GiMicroscopeLens } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { MenuItems } from "../MenuItems";
import useScroll from "../../../../../Card UI/HandleScroll";

const NavBar = (props) => {
    const { onOpenMenu, setOpenMenu } = props;
    const scrollPosition = useScroll();
    const [openSubMenu, setSubOpenMenu] = useState(null);
    const closeNav = () => {
        setOpenMenu(!onOpenMenu);
    };

    const handleOpenSubMenu = (index) => {
        if (openSubMenu === index) {
            setSubOpenMenu(null);
        } else {
            setSubOpenMenu(index);
        }
    };

    return (
        <nav
            className={`z-[3000] fixed top-[10%] w-[100%] h-[90vh] Hidden-scroll-bar opacity-95 overflow-y-auto backdrop-blur-md  transition-all ease-linear duration-100  dt:hidden border-b-white  bg-premierColor ${
                onOpenMenu ? "NavBar_SubItem--active" : "NavBar-SubItem--close"
            }`}
        >
            <ul className=" mt-[4rem]">
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        {item.subMenu ? (
                            <>
                                {index === 1 && (
                                    <>
                                        <button
                                            className="ItemMenuPC    flex-row items-center"
                                            onClick={() =>
                                                handleOpenSubMenu(index)
                                            }
                                        >
                                            <GiSunglasses className="  mr-4" />
                                            {item.title}
                                            <MdKeyboardDoubleArrowDown className="ml-[10px] group-focus:rotate-180 duration-300 transition-all ease-linear  animate-pulse"></MdKeyboardDoubleArrowDown>
                                        </button>

                                        {openSubMenu === index && (
                                            <ul>
                                                {item.subMenu?.map(
                                                    (submenuitem, index) => (
                                                        <li
                                                            onClick={closeNav}
                                                            className=" DescCustom text-start list-disc  ml-[5rem] py-2"
                                                            key={index}
                                                        >
                                                            <Link
                                                                to={
                                                                    submenuitem.url
                                                                }
                                                            >
                                                                {
                                                                    submenuitem.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </>
                                )}
                                {index === 2 && (
                                    <>
                                        <button
                                            className="ItemMenuPC  group flex-row items-center"
                                            onClick={() =>
                                                handleOpenSubMenu(index)
                                            }
                                        >
                                            <GiMicroscopeLens className="  mr-4" />
                                            {item.title}
                                            <MdKeyboardDoubleArrowDown className="ml-[10px]  group-focus:rotate-180 duration-300 transition-all ease-linear  animate-pulse"></MdKeyboardDoubleArrowDown>
                                        </button>

                                        {openSubMenu === index && (
                                            <ul>
                                                {item.subMenu?.map(
                                                    (submenuitem, index) => (
                                                        <li
                                                            onClick={closeNav}
                                                            className=" DescCustom text-start list-disc  ml-[5rem] py-2"
                                                            key={index}
                                                        >
                                                            <Link
                                                                to={
                                                                    submenuitem.url
                                                                }
                                                            >
                                                                {
                                                                    submenuitem.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                {index === 0 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="ItemMenuPC  flex-row items-center"
                                    >
                                        <BiHomeHeart className="  mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 1 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="ItemMenuPC  flex-row items-center"
                                    >
                                        <GiArchiveResearch className="  mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 3 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="ItemMenuPC  flex-row items-center"
                                    >
                                        <GiArchiveResearch className="  mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 4 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="ItemMenuPC  flex-row items-center"
                                    >
                                        <AiOutlineMail className="  mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 5 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="ItemMenuPC  flex-row items-center"
                                    >
                                        <TbCalendarTime className="  mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 6 && (
                                    <div className="ItemMenuPC  flex-row items-center">
                                        <a
                                            className="flex items-center justify-center  rounded-[20px]  w-[40px] h-[40px] bg-[#fff]    "
                                            href="https://www.facebook.com/MinOptik"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BiLogoFacebook className=" text-custom-darkgreen text-[25px]" />
                                        </a>
                                        <a
                                            className="flex items-center justify-center text-[18px] rounded-[20px] w-[40px] h-[40px] bg-[#fff] mx-2 "
                                            href="https://www.instagram.com/minoptik/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR0vvDrrC2I73ljCZjxU68Yd-_2__zeEznX2P6NNpqVvwhn6ofEW0vJUO7Y"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <CiInstagram className=" text-custom-darkgreen text-[25px]  " />
                                        </a>

                                        {item.title}
                                    </div>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
