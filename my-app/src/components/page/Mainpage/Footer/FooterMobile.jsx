import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import SynologenImg from "../../../Card UI/Synologen";
import { Link } from "react-router-dom";
const FooterMobile = () => {
    return (
        <div className="dt:hidden mb:h-[110vh] mbx:h-[80vh] bg-premierColor">
            {/* Mobile */}
            <div className="flex flex-col  items-center px-[20px]">
                {/* cột item 1 */}

                <div className="flex justify-between items-start w-full mt-[20px] ">
                    <div className="flex-1 leading-9 flex flex-col  justify-center">
                        <h3 className="text-[1.2rem] font-bold font-Exo text-white">
                            Linser & Glasögon
                        </h3>
                        <div className="flex-col flex StyleLinkFooter">
                            <Link to="/Offer">KontakLinknto</Link>

                            <Link to="/WorkGlasses">Arbetsglasögon</Link>
                            <Link to="/TorraOgon">Torra ögon</Link>
                            <Link to="/GlassChild">Glasögon till barn</Link>
                            <Link to="/SunGlasses">Solglasögon</Link>
                        </div>
                    </div>
                    <div className="flex-1 leading-7 flex flex-col justify-center">
                        <h3 className="text-[1.2rem] font-bold font-Exo text-white">
                            Synundersökning
                        </h3>
                        <div className="flex-col flex StyleLinkFooter">
                            <Link to="/Introduction">Vad gör en optiker</Link>
                        </div>
                    </div>
                </div>
                {/* cột item 2 */}

                <div className="flex justify-between items-start w-full mt-[20px] ">
                    <div className="flex-1 leading-9 flex flex-col  justify-center">
                        <h3 className="text-[1.2rem] font-bold font-Exo text-white">
                            Information
                        </h3>
                        <div className="flex-col flex StyleLinkFooter">
                            <Link
                                className="underline"
                                to="/PartialPayment"
                                alt="PartialPayment"
                            >
                                delbetalning
                            </Link>

                            <Link className="underline" to="">
                                boka tid
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 leading-7 flex flex-col justify-center">
                        <h3 className="text-[1.2rem]  font-bold font-Exo text-white">
                            Kontakt
                        </h3>
                        <div className="flex-col flex StyleLinkFooter">
                            <Link className="underline" to="/OptikLocation">
                                Hitta till oss
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Cột item 3 */}
                <div>
                    <div className="mt-[3rem]">
                        <span className="text-20 font-Exo font-bold text-white uppercase">
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
                    <div className=" mt-[3rem] flex flex-col items-center justify-center">
                        <SynologenImg></SynologenImg>

                        <span className="  font-Exo  text-white mt-[1rem]">
                            Kvlaitéts & MiöjöpoLinkc
                        </span>
                        <hr className="w-5/6 border-dashed relative top-[30px]" />
                    </div>
                </div>
            </div>

            {/* Desktop */}
        </div>
    );
};
export default FooterMobile;
