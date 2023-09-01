import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import useScroll from "../../Card UI/HandleScroll";
import { Link } from "react-router-dom";
const PcMenu = () => {
    const scrollPosition = useScroll();
    return (
        <ul
            className={`hidden dt:flex justify-center items-center bg-[#005648] h-[60px] border-[1px]
             border-b-white ${
                 scrollPosition
                     ? "dt:fixed  dt:h-[60px] w-[90%] z-[555] top-0 left-[5%] bg-[#005648d7] ease-in-out duration-700"
                     : ""
             }`}
        >
            <li className="  MenuPc  flex  hover:bg-[#ffffffe1]  hover:text-[#306860]   ">
                <Link to="/" alt="Hem">
                    Hem
                </Link>
            </li>
            <li className="MenuPc  group transition-all hover:bg-[#ffffffe1]  hover:text-[#306860]  relative     ">
                <Link className=" flex justify-center  " to="./">
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
                                to="/About"
                                alt="Kontaklinser "
                                className="  block h-[3rem] translate-y-[10px] px-[10px] duration-[0.2s] ease-in-out "
                            >
                                Vad gör en Optiker?
                            </Link>
                        </li>
                    </ul>
                </Link>
            </li>
            <li className="MenuPc  group transition-all hover:bg-[#ffffffe1]  hover:text-[#306860] relative">
                <Link className=" flex justify-center  " to="./">
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
                                to="./"
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
                                to="./"
                                alt="Glasögon till barn"
                            >
                                Glasögon till barn
                            </Link>
                        </li>
                        <li
                            className="  text-[16px] font-semibold  z-[100] translate-x-[-100%] text-white
                          bg-premierColor hover:bg-[#ffffffe1]  hover:text-[#306860]   scale-0 group-hover:translate-x-[0]  
                          duration-[0.2sease-in-out group-hover:scale-100  "
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
                </Link>
            </li>
            <li className="MenuPc text-white  flex hover:bg-[#ffffffe1]  hover:text-[#306860]   ">
                <Link className="   " to="./">
                    Solglasögon
                </Link>
            </li>
            <li className="MenuPc  flex text-white   hover:bg-[#ffffffe1]  hover:text-[#306860]   ">
                <Link className="  " to="./">
                    Hitta till oss
                </Link>
            </li>
            <li className="MenuPc  flex text-white  flex hover:bg-[#ffffffe1]  hover:text-[#306860]  ">
                <Link className=" " to="/BokaTid">
                    Boka tid
                </Link>
            </li>
        </ul>
    );
};

export default PcMenu;
