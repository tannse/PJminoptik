import { useState, useEffect, Contex } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import NavBar from "../Navbar/Container/NavBar";
import NavPC from "../Navbar/Container/NavPC";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import logoOptik from "../../../../assets/logoOptik.png";
import { Link } from "react-router-dom";
import useScroll from "../../../../Card UI/HandleScroll";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ShowLeftDelayAnimate } from "../../../../Card UI/Animation";
const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const scrollPosition = useScroll();
    useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.style.overflow = activeMenu ? "hidden" : "auto";
        return () => {
            htmlElement.style.overflow = "auto";
        };
    }, [activeMenu]);

    const HandleOpenMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <header
            className={`flex  top-0 left-0 dt:relative dt:flex-col bg-[#fff]  z-[10000] ${
                scrollPosition ? "StickyNav" : ""
            }`}
        >
            <div className="mx-[35px] dt:ml-[146px] my-[15px] flex justify-between items-center rounded-lg">
                <Link
                    to="/"
                    className=" w-[70%]  dt:w-[325px] dt:h-[25%]    object-cover"
                >
                    <img src={logoOptik} alt="Logo"></img>
                </Link>
                <div className="hidden dt:flex flex-col">
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
                <div className=" relative  flex flex-col   items-center">
                    <div className="hidden dt:flex items-center  mr-[46px]">
                        <motion.div
                            {...ShowLeftDelayAnimate(0.2)}
                            className="flex-1 flex mx-2 items-center bg-premierColor text-white rounded-lg p-[6px] hover:bg-[#fff] hover:text-custom-darkgreen duration-500 hover:animate-pulse transition-all "
                        >
                            <AiOutlineMail className="text-[20px]"></AiOutlineMail>
                            <a
                                href="mailto:vellinge@minoptik.se"
                                className="ml-1"
                            >
                                vellinge@minoptik.se
                            </a>
                        </motion.div>
                        <motion.div
                            {...ShowLeftDelayAnimate(0.4)}
                            className="flex-1 flex mx-2 items-center bg-premierColor text-white rounded-lg p-[6px] hover:bg-[#fff] hover:text-custom-darkgreen duration-500 hover:animate-pulse transition-all"
                        >
                            <BsTelephoneOutbound className="text-[20px]"></BsTelephoneOutbound>
                            <a href="tel:040-426280" className="ml-1">
                                040-426280
                            </a>
                        </motion.div>
                        <motion.div
                            {...ShowLeftDelayAnimate(0.6)}
                            className="flex-1 flex mx-2 items-center bg-premierColor text-white rounded-lg p-[6px] hover:bg-[#fff] hover:text-custom-darkgreen duration-500 hover:animate-pulse transition-all"
                        >
                            <AiOutlineMail className="text-[20px]"></AiOutlineMail>
                            <Link
                                to="/PartialPayment"
                                alt="PartialPayment"
                                className="ml-1 cursor-pointer"
                            >
                                Delbetalning
                            </Link>
                        </motion.div>
                    </div>
                    <Button className="  hidden dt:block mt-[15px] outline-none active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-lg border-[1px] border-solid border-white  bg-[#00564B] text-white w-[164px] h-[43px]">
                        <Link
                            to="/Booking"
                            alt="BOKA TID ONLINE"
                            className=" w-[100%] ease-linear duration-150"
                        >
                            BOKA TID ONLINE
                        </Link>
                    </Button>
                </div>
                {activeMenu ? (
                    <BiExit
                        className=" dt:hidden w-[30px] h-[30px] text-[#00564b] z-[5000]  cursor-pointer"
                        onClick={HandleOpenMenu}
                    />
                ) : (
                    <HiOutlineMenu
                        className=" relative float-right   dt:hidden w-[30px] h-[30px] text-[#00564b] z-[5000]  cursor-pointer"
                        onClick={HandleOpenMenu}
                    ></HiOutlineMenu>
                )}
            </div>

            <NavBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <NavPC></NavPC>
        </header>
    );
};

export default Header;
