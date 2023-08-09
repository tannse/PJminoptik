import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import useScroll from "../Card UI/HandleScroll";

const PcMenu = () => {
    const scrollPosition = useScroll();
    return (
        <ul
            className={`hidden dt:flex justify-center items-center bg-[#005648] h-[60px] border-[1px]
             border-b-white ${
                 scrollPosition
                     ? "dt:fixed  dt:h-[75px] w-[90%] z-[555] top-0 left-[5%] bg-[#005648d7] ease-in-out duration-500"
                     : ""
             }`}
        >
            <li className="  MenuPc  flex  hover:bg-opacity-50   ">
                <a href="./" alt="Hem">
                    Hem
                </a>
            </li>
            <li className="MenuPc  group transition-all  relative     ">
                <a className=" flex justify-center  " href="./">
                    Synundersökning
                    <MdKeyboardDoubleArrowDown className="group-hover:rotate-180 self-center duration-200 ease-linear ml-[10px]"></MdKeyboardDoubleArrowDown>
                    <ul
                        className="absolute   
                        duration-500 ease-linear scale-0 group-hover:scale-100 text-center  top-[2.4em] w-fit  p-[15px] z-[100] self-start"
                    >
                        <li className=" text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%] p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]    duration-[0.5s] ease-in-out group-hover:scale-100 ">
                            <a
                                href="./"
                                alt="Kontaklinser "
                                className=" duration-[0.5s] ease-in-out "
                            >
                                Vad göra en Optiker?
                            </a>
                        </li>
                    </ul>
                </a>
            </li>
            <li className="MenuPc  group transition-all  relative">
                <a className=" flex justify-center  " href="./">
                    Linser och Glasögon
                    <MdKeyboardDoubleArrowDown className="group-hover:rotate-180 self-center duration-200 ease-linear ml-[10px] "></MdKeyboardDoubleArrowDown>
                    <ul
                        className=" absolute   
                      duration-500 ease-linear scale-0 group-hover:scale-100  top-[2.4em] w-fit  p-[15px] z-[100]"
                    >
                        <li
                            className=" text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]  
                          duration-[0.4s] ease-in-out group-hover:scale-100 "
                        >
                            <a
                                href="./"
                                alt="Kontaklinser "
                                className=" duration-[0.5s] ease-in-out"
                            >
                                Kontaktlinser
                            </a>
                        </li>
                        <li
                            className="  text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50 
                          scale-0 group-hover:translate-x-[0]  
                          duration-[0.6s] ease-in-out group-hover:scale-100 "
                        >
                            <a href="./" alt="Arbetglasögon">
                                Arbetglasögon
                            </a>
                        </li>
                        <li
                            className="  text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]  
                          duration-[0.8s] ease-in-out group-hover:scale-100  "
                        >
                            <a href="./" alt="Glasögon till barn">
                                Glasögon till barn
                            </a>
                        </li>
                        <li
                            className="  text-[16px] font-semibold hover:text-[20px] z-[100] translate-x-[-100%]
                         p-[15px] bg-premierColor hover:bg-opacity-50   scale-0 group-hover:translate-x-[0]  
                          duration-[1s] ease-in-out group-hover:scale-100  "
                        >
                            <a href="./" alt="Torra ögon">
                                Torra ögon
                            </a>
                        </li>
                    </ul>
                </a>
            </li>
            <li className="MenuPc  flex    ">
                <a className="  " href="./">
                    Solglasögon
                </a>
            </li>
            <li className="MenuPc  flex    ">
                <a className="  " href="./">
                    Hitta till oss
                </a>
            </li>
            <li className="MenuPc  flex    ">
                <a className="  " href="./">
                    Boka tid
                </a>
            </li>
        </ul>
    );
};

export default PcMenu;
