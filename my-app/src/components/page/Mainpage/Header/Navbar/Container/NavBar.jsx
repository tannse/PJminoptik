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
import DropDownMenu from "../DropDownMenu";
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
            className={`z-[3000] fixed top-0 w-[100%] Hidden-scroll-bar opacity-95 overflow-y-auto backdrop-blur-md  transition-all ease-linear duration-100 h-[100vh] dt:flex dt:h-[60px] dt:justify-center dt:items-center border-b-white  bg-premierColor ${
                onOpenMenu ? "NavBar_SubItem--active" : "NavBar-SubItem--close"
            }`}
        >
            <h2 className="font-Exo px-[30px] mt-[10px] text-white text-[40px] font-extrabold">
                Min Optik
            </h2>
            <ul className=" MenuMobile border-b-0 mt-[10px] ">
                {MenuItems.map((item, index) => (
                    <li key={index} className=" ">
                        {item.subMenu ? (
                            <>
                                {index === 1 && (
                                    <>
                                        <button
                                            className="MenuMobile group flex-row items-center"
                                            onClick={() =>
                                                handleOpenSubMenu(index)
                                            }
                                        >
                                            <GiSunglasses className="text-[20px] mr-4" />
                                            {item.title}
                                            <MdKeyboardDoubleArrowDown className="ml-[10px] group-focus:rotate-180 duration-300 transition-all ease-linear text-[20px] animate-pulse"></MdKeyboardDoubleArrowDown>
                                        </button>

                                        {openSubMenu === index && (
                                            <ul>
                                                {item.subMenu?.map(
                                                    (submenuitem, index) => (
                                                        <li
                                                            onClick={closeNav}
                                                            className="list-disc text-[20px]   ml-[3.5rem] py-2"
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
                                            className="MenuMobile group flex-row items-center"
                                            onClick={() =>
                                                handleOpenSubMenu(index)
                                            }
                                        >
                                            <GiMicroscopeLens className="text-[20px] mr-4" />
                                            {item.title}
                                            <MdKeyboardDoubleArrowDown className="ml-[10px] text-[20px] group-focus:rotate-180 duration-300 transition-all ease-linear  animate-pulse"></MdKeyboardDoubleArrowDown>
                                        </button>

                                        {openSubMenu === index && (
                                            <ul>
                                                {item.subMenu?.map(
                                                    (submenuitem, index) => (
                                                        <li
                                                            onClick={closeNav}
                                                            className="list-disc text-[20px]   ml-[3.5rem] py-2"
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
                                        className="MenuMobile flex-row items-center"
                                    >
                                        <BiHomeHeart className="text-[20px] mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 1 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="MenuMobile flex-row items-center"
                                    >
                                        <GiArchiveResearch className="text-[20px] mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 3 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="MenuMobile flex-row items-center"
                                    >
                                        <GiArchiveResearch className="text-[20px] mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 4 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="MenuMobile flex-row items-center"
                                    >
                                        <AiOutlineMail className="text-[20px] mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 5 && (
                                    <Link
                                        to={item.url}
                                        alt={item.url}
                                        className="MenuMobile flex-row items-center"
                                    >
                                        <TbCalendarTime className="text-[20px] mr-4" />
                                        {item.title}
                                    </Link>
                                )}
                                {index === 6 && (
                                    <div className="MenuMobile flex-row items-center">
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
/* <li className="MenuMobile dt:MenuPC">
                    <h2 className="font-Exo px-[20px]   text-white text-[40px] font-extrabold">
                        Min Optik
                    </h2>
                </li>
                <li className="MenuMobile dt:MenuPC   ">
                    <Link
                        to={item.url}
                        alt="Hem"
                        className=" flex items-center font-light mt-[5px]"
                    >
                        <BiHomeHeart className=" text-[20px] mr-4" />
                        Hem
                    </Link>
                </li>

                <li className="MenuMobile dt:MenuPC">
                    <div
                        onClick=HandleSubMenu1}
                        className=" flex items-center font-light text-[20px] mt-[5px] "
                    >
                        <FaEye className=" text-[20px] mr-4" /> Synundersökning
                        <MdKeyboardDoubleArrowDown className="ml-[10px] text-[20px] animate-pulse"></MdKeyboardDoubleArrowDown>
                    </div>
                    <ul
                        className={`relative left-0 ease-in-out  duration-500 ${
                            SubMenu1 ? "block" : "hidden"
                        }`}
                    >
                        <li className="my-[10px]   mx-[30px] ">
                            <Link
                                to="/VisionCare"
                                alt="VisionCare "
                                className=" block h-[3rem] translate-y-[10px]  duration-[0.2s] ease-in-out "
                            >
                                Synvård
                            </Link>
                        </li>
                        <li className="my-[10px]   mx-[30px]  ">
                            <Link
                                className="border-b-[1px] hover:opacity-80"
                                href="https://minoptik.se/vad-gor-en-optiker/"
                            >
                                Vad göra en Optiker
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="MenuMobile dt:MenuPC border-b-[1px]   border-b-[1px] hover:opacity-80 ">
                    <div
                        className=" flex  items-center  font-light mt-[5px] "
                        onClick={HandleSubMenu2}
                    >
                        <GiMicroscopeLens className=" text-[20px] mr-4" />
                        Linser och Glasögon
                        <MdKeyboardDoubleArrowDown className="ml-[10px] text-[20px] animate-pulse"></MdKeyboardDoubleArrowDown>
                    </div>

                    <ul
                        className={`relative left-0 ease-in-out  duration-500 ${
                            SubMenu2 ? "hidden" : "block"
                        }`}
                    >
                        <li className=" my-[10px] mx-[30px] hover:opacity-80">
                            <Link className="">Kontaktlinser</Link>
                        </li>
                        <li className=" my-[10px] mx-[30px] hover:opacity-80">
                            <Link className="">Arbetglasögon</Link>
                        </li>
                        <li className=" my-[10px] mx-[30px] hover:opacity-80">
                            <Link className="">Glasögon till barn</Link>
                        </li>
                        <li className=" my-[10px] mx-[30px] hover:opacity-80">
                            <Link className="">Torra ögon</Link>
                        </li>
                    </ul>
                </li>
                <li className="MenuMobile dt:MenuPC border-b-[1px] flex    ">
                    <Link
                        className=" flex items-center font-light mt-[5px]"
                        href="./"
                    >
                        <GiSunglasses className=" text-[20px] mr-4" />
                        Solglasögon
                    </Link>
                </li>
                <li className="MenuMobile dt:MenuPC border-b-[1px] flex    ">
                    <Link
                        className=" flex items-center font-light mt-[5px]"
                        href="./"
                    >
                        <GiArchiveResearch className=" text-[20px] mr-4" />
                        Hitta till oss
                    </Link>
                </li>
                <li className="MenuMobile dt:MenuPC border-b-[1px] flex    ">
                    <Link
                        className=" flex items-center font-light mt-[5px]"
                        href="./"
                    >
                        <TbCalendarTime className=" text-[20px] mr-4" />
                        Boka tid
                    </Link>
                </li>
                <li className=" MenuMobile">
                    <a
                        className="flex items-center justify-center text-[25px] rounded-[20px] w-[35px] h-[35px] bg-[#fff]    "
                        href="https://www.facebook.com/MinOptik"
                    >
                        <BiLogoFacebook />
                    </a>
                    <a
                        className="flex items-center justify-center text-[25px] rounded-[20px] w-[35px] h-[35px] bg-[#fff] ml-2 "
                        href="./"
                    >
                        <CiInstagram />
                    </a>
                </li>
                <li className=" MenuMobile">
                    <p className="text-[20px]  text-white"> Ring</p>
                    <span className="text-white px-[10px]  font-light text-[20px]  ">
                        +04889999999
                    </span>
                </li>
                <li className=" MenuMobile">
                    <span className="text-white px-[10px] text-[20px] font-light  py-[20px]">
                        <AiOutlineMail className=" text-[20px] mr-4  text-white"></AiOutlineMail>
                        info@minoptik.se
                    </span>
                </li> */
