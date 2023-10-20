import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import useScroll from "../../../../../Card UI/HandleScroll";
import { NavLink, Link } from "react-router-dom";
const NavPC = () => {
    const scrollPosition = useScroll();
    return (
        <nav className="">
            <ul
                className={`hidden dt:flex dt:justify-evenly dt:items-center  dt:h-[70px] bg-[#005648] border-[1px]
             border-b-white ${scrollPosition ? "StickyNav" : ""}`}
            >
                <li className="  ItemMenuPC cursor-pointer  flex  hover:bg-[#ffffffe1]  hover:text-[#306860]   ">
                    <Link to="/" alt="Hem">
                        Hem
                    </Link>
                </li>
                <li className="ItemMenuPC cursor-pointer  group transition-all hover:bg-[#ffffffe1]  hover:text-[#306860]  relative     ">
                    <NavLink
                        className=" cursor-pointer flex justify-center"
                        to="/VisionCare"
                    >
                        Synundersökning
                        <MdKeyboardDoubleArrowDown className="group-hover:rotate-180 self-center duration-200 ease-linear ml-[10px]"></MdKeyboardDoubleArrowDown>
                        <ul
                            className="absolute
                        duration-400 ease-linear scale-0 group-hover:scale-100 text-center  top-[2.4em] w-fit  p-[15px] z-[100] self-start "
                        >
                            <li className="text-[16px] text-white font-semibold  z-[100] translate-x-[-100%]  bg-premierColor hover:bg-[#ffffffe1]  hover:text-[#306860]   scale-0 group-hover:translate-x-[0]    duration-[0.2s] ease-in-out group-hover:scale-100 ">
                                <Link
                                    to="/VisionCare"
                                    alt="VisionCare "
                                    className=" block h-[3rem] translate-y-[10px]  duration-[0.2s] ease-in-out "
                                >
                                    Synvård
                                </Link>
                            </li>
                            <li className=" text-[16px] text-white font-semibold  z-[100] translate-x-[-100%]  bg-premierColor hover:bg-[#ffffffe1]  hover:text-[#306860]  scale-0 group-hover:translate-x-[0]    duration-[0.2s] ease-in-out group-hover:scale-100 ">
                                <Link
                                    to="/Introduction"
                                    alt="Kontaklinser "
                                    className="  block h-[3rem] translate-y-[10px] px-[10px] duration-[0.2s] ease-in-out "
                                >
                                    Vad gör en Optiker?
                                </Link>
                            </li>
                        </ul>
                    </NavLink>
                </li>
                <NavLink
                    to="/Offer"
                    className="ItemMenuPC  group transition-all hover:bg-[#ffffffe1]  hover:text-[#306860] relative"
                >
                    <nav className=" cursor-pointer flex justify-center  ">
                        Linser och Glasögon
                        <MdKeyboardDoubleArrowDown className="group-hover:rotate-180 self-center duration-200 ease-linear ml-[10px] "></MdKeyboardDoubleArrowDown>
                        <ul
                            className=" absolute
                      duration-400 ease-linear scale-0 group-hover:scale-100  top-[2.4em] p-[15px] w-fit  text-center z-[100]"
                        >
                            <li
                                className=" text-[16px] font-semibold  z-[100] translate-x-[-100%] text-white bg-premierColor
                            hover:bg-[#ffffffe1]  hover:text-[#306860]    scale-0 group-hover:translate-x-[0]
                          duration-[0.2s] ease-in-out group-hover:scale-100 "
                            >
                                <Link
                                    to="/Offer"
                                    alt="Kontaklinser "
                                    className=" block  h-[3rem] translate-y-[10px] duration-[0.2s] ease-in-out"
                                >
                                    Kontaktlinser
                                </Link>
                            </li>
                            <li
                                className="  text-[16px] font-semibold  z-[100] translate-x-[-100%] text-white
                         bg-premierColor hover:bg-[#ffffffe1]  hover:text-[#306860]
                          scale-0 group-hover:translate-x-[0]
                          duration-[0.2s] ease-in-out group-hover:scale-100 "
                            >
                                <Link
                                    to="/WorkGlasses"
                                    alt="Arbetglasögon"
                                    className="block  h-[3rem] translate-y-[10px] px-[10px] duration-[0.2s] ease-in-out"
                                >
                                    Arbetglasögon
                                </Link>
                            </li>
                            <li
                                className="  text-[16px] font-semibold  z-[100] translate-x-[-100%] text-white
                         bg-premierColor hover:bg-[#ffffffe1]  hover:text-[#306860]   scale-0 group-hover:translate-x-[0]
                          duration-[0.2s] ease-in-out group-hover:scale-100  "
                            >
                                <Link
                                    className="block  h-[3rem] translate-y-[10px] px-[10px] duration-[0.2s] ease-in-out"
                                    to="/GlassChild"
                                    alt="Glasögon till barn"
                                >
                                    Glasögon till barn
                                </Link>
                            </li>
                            <li
                                className="  text-[16px] font-semibold  z-[100] translate-x-[-100%] text-white
                          bg-premierColor hover:bg-[#ffffffe1]  hover:text-[#306860]   scale-0 group-hover:translate-x-[0]
                          duration-[0.2s] ease-in-out group-hover:scale-100  "
                            >
                                <Link
                                    to="./"
                                    alt="Torra ögon "
                                    className="block  h-[3rem] translate-y-[10px] px-[10px] duration-[0.2s] ease-in-out"
                                >
                                    Torra ögon
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </NavLink>
                <li className="ItemMenuPC cursor-pointer text-white  flex hover:bg-[#ffffffe1]  hover:text-[#306860]   ">
                    <Link className="   " to="./">
                        Solglasögon
                    </Link>
                </li>
                <li className="ItemMenuPC cursor-pointer  flex text-white   hover:bg-[#ffffffe1]  hover:text-[#306860]   ">
                    <Link className="  " to="/ErrorPage">
                        Hitta till oss
                    </Link>
                </li>
                <li className="ItemMenuPC  cursor-pointer flex text-white  flex hover:bg-[#ffffffe1]  hover:text-[#306860]  ">
                    <Link className=" " to="/Booking">
                        Boka tid
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavPC;
