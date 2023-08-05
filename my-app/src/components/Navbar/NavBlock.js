import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { BiExit } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import MobileMenu from "./MobileMenu";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import logoOptik from "../assets/logoOptik.svg";

const NavBlock = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const ToggleMenu = (e) => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className="relative">
            <div className="mb:mx-[35px] dt:ml-[146px] mb:my-[15px] flex justify-between items-center rounded-lg">
                <img
                    className=" dt:w-[325px] dt:h-[25%] mbx:w-3/4 mbx:h-[60px] h-[50px]   object-cover"
                    src={logoOptik}
                    alt="Logo"
                />
                <div className="mb:hidden dt:flex flex-col">
                    <span className="font-Exo text-20">
                        TIS - FRE: 10:00 – 18.00
                    </span>
                    <span className="font-Exo text-20 pt text-center">
                        {" "}
                        LÖR: 10:00 – 13.00{" "}
                    </span>
                    <span className="font-Exo  text-center text-20">
                        SÖN :STÄNGT
                    </span>
                </div>
                <div className=" relative mt-[-2%] flex flex-col   items-center">
                    <div className="mb:hidden dt:flex items-center  mr-[46px]">
                        <div className="flex mx-2 items-center">
                            <AiOutlineMail className="text-[20px]"></AiOutlineMail>
                            <span className="ml-1">vellinge@minoptik.se</span>
                        </div>
                        <div className="flex mx-2 items-center">
                            <BsTelephoneOutbound className="text-[20px]"></BsTelephoneOutbound>
                            <span className="ml-1">040-426280</span>
                        </div>
                        <div className="flex mx-2 items-center">
                            <AiOutlineMail className="text-[20px]"></AiOutlineMail>
                            <span className="ml-1">Delbetalning</span>
                        </div>
                    </div>
                    <button className=" mb:hidden dt:block mt-[15px] outline-none active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[20px] border-[1px] border-solid border-white  bg-[#00564B] text-white w-[164px] h-[43px]">
                        BOKA TID ONLINE
                    </button>
                </div>

                <HiOutlineMenu
                    className="    dt:hidden w-[30px] h-[30px] z-[200] text-[#00564b] cursor-pointer"
                    onClick={ToggleMenu}
                ></HiOutlineMenu>
            </div>

            <div
                className={`dt:hidden  w-[100%] bg-bgOverlay h-[100%] top-0 z-[100] transition-transform ease-in-out duration-500  ${
                    openMenu ? " fixed  opacity-100  " : " opacity-0 "
                }`}
            >
                <div
                    className={`StyleMenu ${
                        openMenu
                            ? "translate-x-0 opacity-100"
                            : "translate-x-[-100%] opacity-0"
                    }`}
                >
                    <div className="flex items-center justify-between ">
                        <h2 className="font-Exo px-[20px]   py-[21px] text-white text-[40px] font-extrabold">
                            Min Optik
                        </h2>
                        <BiExit
                            className=" w-[30px] h-[30px] mr-[10%]    z-[200] text-white cursor-pointer"
                            onClick={ToggleMenu}
                        />
                    </div>

                    <MobileMenu></MobileMenu>

                    <div className=" px-[20px] py-[14px] flex">
                        <a
                            className="flex items-center justify-center text-[25px] rounded-[20px] w-[35px] h-[35px] bg-[#fff]    "
                            href="./"
                        >
                            <BiLogoFacebook className="" />
                        </a>
                        <a
                            className="flex items-center justify-center text-[25px] rounded-[20px] w-[35px] h-[35px] bg-[#fff] ml-2 "
                            href="./"
                        >
                            <CiInstagram />
                        </a>
                    </div>
                    <div className=" px-[20px] flex  items-center">
                        <div className="text-[20px]  text-white"> Ring</div>
                        <span className="text-white px-[10px]  font-light text-[20px]  ">
                            +04889999999
                        </span>
                    </div>
                    <div className=" px-[20px] flex  items-center">
                        <AiOutlineMail className="text-[20px]   text-white"></AiOutlineMail>
                        <span className="text-white px-[10px] text-[20px] font-light  py-[20px]">
                            info@minoptik.se
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBlock;
