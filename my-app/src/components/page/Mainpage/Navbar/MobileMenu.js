import { BiHomeHeart } from "react-icons/bi";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GiMicroscopeLens } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const MenuMobile = () => {
    const [SubMenu, setSubMenu] = useState(false);
    const SubMenuHandler = (event) => {
        event.preventDefault();
        setSubMenu(!SubMenu);
    };
    const [SubMenu1, setSubMenu1] = useState(false);
    const SubMenuHandler2 = (event) => {
        event.preventDefault();
        setSubMenu1(!SubMenu1);
    };
    return (
        <ul className="">
            <li className="  MenuMobile border-b-[1px] flex    ">
                <BiHomeHeart className="inline" />
                <a
                    className=" mt-[5px] font-light text-[20px] px-[10px]"
                    href="./"
                >
                    Hem
                </a>
            </li>
            <li className="MenuMobile border-b-[1px]   border-b-[1px]  ">
                <a
                    className=" flex items-center font-light text-[20px] mt-[5px] "
                    onClick={SubMenuHandler}
                    href="./"
                >
                    <FaEye className=" mr-2" /> Synundersökning
                    <MdKeyboardDoubleArrowDown className="ml-[10px] text-[20px] animate-pulse"></MdKeyboardDoubleArrowDown>
                </a>
                <ul
                    className={
                        SubMenu
                            ? "relative left-0 ease-in-out  duration-500  "
                            : "  absolute left-[-100%]  "
                    }
                >
                    <li className="my-[10px]   mx-[30px]  ">
                        <a
                            className="border-b-[1px] hover:opacity-80"
                            href="https://minoptik.se/vad-gor-en-optiker/"
                        >
                            Vad göra en Optiker
                        </a>
                    </li>
                </ul>
            </li>
            <li className="MenuMobile border-b-[1px]   border-b-[1px] hover:opacity-80 ">
                <a
                    className=" flex items-center font-light mt-[5px] "
                    onClick={SubMenuHandler2}
                    href="https://minoptik.se/torra-ogon"
                >
                    <GiMicroscopeLens className=" text-[20px] mr-2" /> Linser
                    och Glasögon
                    <MdKeyboardDoubleArrowDown className="ml-[10px] text-[20px] animate-pulse"></MdKeyboardDoubleArrowDown>
                </a>

                <ul
                    className={
                        SubMenu1
                            ? "relative left-0 ease-in-out duration-500"
                            : "absolute left-[-100%]"
                    }
                >
                    <li className=" my-[10px] mx-[30px] hover:opacity-80">
                        <a
                            className=""
                            href="https://minoptik.se/kontaktlinser/"
                        >
                            Kontaktlinser
                        </a>
                    </li>
                    <li className=" my-[10px] mx-[30px] hover:opacity-80">
                        <a
                            className=""
                            href="https://minoptik.se/arbetsglasogon/"
                        >
                            Arbetglasögon
                        </a>
                    </li>
                    <li className=" my-[10px] mx-[30px] hover:opacity-80">
                        <a
                            className=""
                            href="https://minoptik.se/glasogon-till-barn/"
                        >
                            Glasögon till barn
                        </a>
                    </li>
                    <li className=" my-[10px] mx-[30px] hover:opacity-80">
                        <a className="" href="./">
                            Torra ögon
                        </a>
                    </li>
                </ul>
            </li>
            <li className="MenuMobile border-b-[1px] flex    ">
                <GiSunglasses className="inline" />
                <a
                    className=" mt-[5px] text-[20px] font-light px-[10px]"
                    href="./"
                >
                    Solglasögon
                </a>
            </li>
            <li className="MenuMobile border-b-[1px] flex    ">
                <GiArchiveResearch className="inline" />
                <a
                    className=" mt-[5px] font-light text-[20px] px-[10px]"
                    href="./"
                >
                    Hitta till oss
                </a>
            </li>
            <li className="MenuMobile border-b-[1px] flex    ">
                <TbCalendarTime className="inline" />
                <a
                    className=" mt-[5px] font-light text-[20px] px-[10px]"
                    href="./"
                >
                    Boka tid
                </a>
            </li>
        </ul>
    );
};

export default MenuMobile;
