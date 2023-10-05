import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import NavBar from "../Navbar/Container/NavBar";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import logoOptik from "../../../../assets/logoOptik.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.style.overflow = openMenu ? "hidden" : "auto";
        return () => {
            htmlElement.style.overflow = "auto";
        };
    }, [openMenu]);

    const HandleHover = () => {
        setOpenMenu(true);
    };
    const HandleHoverOut = () => {
        setOpenMenu(false);
    };

    return (
        <header className="relative">
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
                        SÖN-MÅN: STÄNGT
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
                    <button className=" group mb:hidden dt:block mt-[15px] outline-none active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[20px] border-[1px] border-solid border-white  bg-[#00564B] text-white w-[164px] h-[43px]">
                        <Link
                            to="/Booking"
                            alt="BOKA TID ONLINE"
                            className="group-hover:text-[1.2rem] w-[100%] ease-linear duration-150"
                        >
                            BOKA TID ONLINE
                        </Link>
                    </button>
                </div>
                {openMenu ? (
                    <BiExit
                        className=" dt:hidden w-[30px] h-[30px] text-[#fff] z-[5000]  cursor-pointer"
                        onClick={HandleHoverOut}
                    />
                ) : (
                    <HiOutlineMenu
                        className=" relative float-right   dt:hidden w-[30px] h-[30px] text-[#00564b]   ] z-[5000]  cursor-pointer"
                        onClick={HandleHover}
                    ></HiOutlineMenu>
                )}
            </div>

            <NavBar onOpenMenu={openMenu} />

            {/* <div
                className={` w-[100%] bg-bgOverlay h-[100%] top-0 z-[100] transition-transform ease-in-out duration-500 dt:hidden  ${
                    openMenu ? " fixed  opacity-100  " : " opacity-0 "
                }`}
            >
                <div></div>
            </div> */}
        </header>
    );
};

export default Header;
