import BGfooter from "../../../Card UI/BGfooter";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import SynologenImg from "../../../Card UI/Synologen";
const FooterMobile = () => {
    return (
        <div className=" relative dt:hidden ">
            {/* Mobile */}
            <div className="  absolute z-[999] h-[90%]   grid grid-cols-2 grid-rows-3  gap-x-8  px-[30px]  inset-0  mt-[20px]">
                {/* Info1 */}

                <div className="leading-7">
                    <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                        Linser & Glasögon
                    </h3>
                    <ul>
                        <li className="text-white  capitalize">Kontaklinser</li>
                        <li className="text-white capitalize">
                            Arbetsglasögon
                        </li>
                        <li className="text-white capitalize">Torra ögon</li>
                        <li className="text-white capitalize">
                            Glasögon till barn
                        </li>
                        <li className="text-white capitalize">Solglasögon</li>
                    </ul>
                </div>
                <div className="leading-9">
                    <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                        Synundersökning
                    </h3>
                    <p className="text-white capitalize">Vad gör en optiker</p>
                </div>

                {/* Info2 */}

                <div>
                    <div className=" mt-[20px] leading-7 ">
                        <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                            Information
                        </h3>
                        <ul>
                            <li className="text-white capitalize">
                                delbetalning
                            </li>
                            <li className="text-white capitalize">boka tid</li>
                        </ul>
                    </div>
                    <div className="mt-[30px] leading-7">
                        <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                            Kontakt
                        </h3>
                        <span className="text-white block">
                            {" "}
                            Hitta till oss
                        </span>
                        <span className="text-white block"> Chat med oss</span>
                        <span className="text-white block italic">
                            {" "}
                            Ringa 0798999999
                        </span>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <span className="text-20  font-Exo font-bold text-white uppercase">
                        Följ oss
                    </span>
                    <div className="flex mt-[0.5rem]">
                        <a
                            className="flex items-center justify-center text-[18px] rounded-[20px] w-[28px] h-[28px] bg-[#fff]    "
                            href="https://www.facebook.com/MinOptik"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BiLogoFacebook className="" />
                        </a>
                        <a
                            className="flex items-center justify-center text-[18px] rounded-[20px] w-[28px] h-[28px] bg-[#fff] ml-2 "
                            href="./"
                        >
                            <CiInstagram />
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col items-center translate-y-[25%] justify-center col-span-2 ">
                    <SynologenImg></SynologenImg>
                    <span className="  font-Exo  text-white mt-[1rem] ">
                        Kvlaitéts & Miöjöpolicy
                    </span>
                    <hr className="w-5/6 border-dashed relative top-[30px]  " />
                </div>
            </div>
            <BGfooter />

            {/* Desktop */}
        </div>
    );
};
export default FooterMobile;
