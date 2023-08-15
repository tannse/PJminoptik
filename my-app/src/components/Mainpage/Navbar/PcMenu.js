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
                     ? "dt:fixed  dt:h-[60px] w-[90%] z-[555] top-0 left-[5%] bg-[#005648d7] ease-in-out duration-500"
                     : ""
             }`}
        >
            <li className="  MenuPc  flex  hover:bg-opacity-50   ">
                <Link to="/" alt="Hem">
                    Hem
                </Link>
            </li>
            <li className="MenuPc  group transition-all  relative     ">
                <Link className=" flex justify-center  " to="./">
                    Synundersökning
                    <MdKeyboardDoubleArrowDown className="group-hover:rotate-180 self-center duration-200 ease-linear ml-[10px]"></MdKeyboardDoubleArrowDown>
                    <ul
                        className="absolute   
                        duration-500 ease-linear scale-0 group-hover:scale-100 text-center  top-[2.4em] w-fit  p-[15px] z-[100] self-start"
                    >
                        <li className=" text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%] p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]    duration-[0.5s] ease-in-out group-hover:scale-100 ">
                            <Link
                                to="/About"
                                alt="Kontaklinser "
                                className=" duration-[0.5s] ease-in-out "
                            >
                                Vad göra en Optiker?
                            </Link>
                        </li>
                    </ul>
                </Link>
            </li>
            <li className="MenuPc  group transition-all  relative">
                <Link className=" flex justify-center  " to="./">
                    Linser och Glasögon
                    <MdKeyboardDoubleArrowDown className="group-hover:rotate-180 self-center duration-200 ease-linear ml-[10px] "></MdKeyboardDoubleArrowDown>
                    <ul
                        className=" absolute   
                      duration-500 ease-linear scale-0 group-hover:scale-100  top-[2.5em] w-fit  p-[15px] z-[100]"
                    >
                        <li
                            className=" text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-70    scale-0 group-hover:translate-x-[0]  
                          duration-[0.4s] ease-in-out group-hover:scale-100 "
                        >
                            <Link
                                to="./"
                                alt="Kontaklinser "
                                className=" duration-[0.5s] ease-in-out"
                            >
                                Kontaktlinser
                            </Link>
                        </li>
                        <li
                            className="  text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50 
                          scale-0 group-hover:translate-x-[0]  
                          duration-[0.6s] ease-in-out group-hover:scale-100 "
                        >
                            <Link to="./" alt="Arbetglasögon">
                                Arbetglasögon
                            </Link>
                        </li>
                        <li
                            className="  text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]  
                          duration-[0.8s] ease-in-out group-hover:scale-100  "
                        >
                            <Link to="./" alt="Glasögon till barn">
                                Glasögon till barn
                            </Link>
                        </li>
                        <li
                            className="  text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]  
                          duration-[1s] ease-in-out group-hover:scale-100  "
                        >
                            <Link to="./" alt="Torra ögon">
                                Torra ögon
                            </Link>
                        </li>
                    </ul>
                </Link>
            </li>
            <li className="MenuPc  flex    ">
                <Link className="  " to="./">
                    Solglasögon
                </Link>
            </li>
            <li className="MenuPc  flex    ">
                <Link className="  " to="./">
                    Hitta till oss
                </Link>
            </li>
            <li className="MenuPc  flex    ">
                <Link className="  " to="./">
                    Boka tid
                </Link>
            </li>
        </ul>
    );
};

export default PcMenu;
