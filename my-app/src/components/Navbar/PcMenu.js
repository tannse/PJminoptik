import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const PcMenu = () => {
    return (
        <ul className=" hidden   dt:flex justify-center items-center bg-[#005648] h-[60px]">
            <li className="  MenuPc border-b-[1px] flex    ">
                <a className="  " href="./">
                    Hem
                </a>
            </li>
            <li className="MenuPc border-b-[1px]   border-b-[1px]  ">
                <a className=" flex  " href="./">
                    Synundersökning
                    <MdKeyboardDoubleArrowDown className="ml-[10px]"></MdKeyboardDoubleArrowDown>
                </a>
            </li>
            <li className="MenuPc border-b-[1px]   border-b-[1px] hover:opacity-80 ">
                <a className=" flex  " href="./">
                    Linser och Glasögon
                    <MdKeyboardDoubleArrowDown className="ml-[10px]"></MdKeyboardDoubleArrowDown>
                </a>
            </li>
            <li className="MenuPc border-b-[1px] flex    ">
                <a className="  " href="./">
                    Solglasögon
                </a>
            </li>
            <li className="MenuPc border-b-[1px] flex    ">
                <a className="  " href="./">
                    Hitta till oss
                </a>
            </li>
            <li className="MenuPc border-b-[1px] flex    ">
                <a className="  " href="./">
                    Boka tid
                </a>
            </li>
        </ul>
    );
};

export default PcMenu;
