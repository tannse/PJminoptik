import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import SynologenImg from "../../../Card UI/Synologen";
import { Link } from "react-router-dom";
const FooterMobile = () => {
    return (
        <div className=" relative dt:hidden mb:h-[80vh] dt:h-[85vh]  ">
            {/* Mobile */}
            <div className=" bg-premierColor absolute z-[999]  grid grid-cols-2 grid-rows-3  gap-x-8  px-[30px]  inset-0   ">
                {/* Info1 */}

                <div className="leading-7 mt-[20px]">
                    <h3 className="text-[1.2rem] font-bold font-Exo text-white">
                        Linser & Glasögon
                    </h3>
                    <div className=" flex flex-col StyleLinkFooter">
                        <Link to="/Offer">KontakLinknto</Link>

                        <Link to="">Arbetsglasögon</Link>
                        <Link to="">Torra ögon</Link>
                        <Link to="">Glasögon till barn</Link>
                        <Link to="">Solglasögon</Link>
                    </div>
                </div>
                <div className="leading-9 mt-[20px]">
                    <h3 className="text-[1.2rem] font-bold font-Exo text-white">
                        Synundersökning
                    </h3>
                    <div className=" flex flex-col StyleLinkFooter">
                        <Link to="">Vad gör en optiker</Link>
                    </div>
                </div>

                {/* Info2 */}

                <div>
                    <div className="  leading-7 flex flex-col items-start justify-center">
                        <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                            Information
                        </h3>
                        <div className="flex-col flex StyleLinkFooter">
                            <Link to="PartialPayment" alt="PartialPayment">
                                delbetalning
                            </Link>

                            <Link to="">boka tid</Link>
                        </div>
                    </div>
                    <div className=" mt-[20px] leading-7 flex flex-col items-start justify-center">
                        <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                            Information
                        </h3>
                        <div className="flex-col flex StyleLinkFooter">
                            <Link to="PartialPayment" alt="PartialPayment">
                                Kontakt
                            </Link>

                            <Link to="">Hitta till oss</Link>
                            <Link to="">Ringa 0798999999</Link>
                        </div>
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
                <div className="relative flex flex-col items-center justify-center col-span-2 ">
                    <SynologenImg></SynologenImg>
                    <span className="  font-Exo  text-white mt-[1rem] ">
                        Kvlaitéts & MiöjöpoLinkc y
                    </span>
                    <hr className="w-5/6 border-dashed relative top-[30px]  " />
                </div>
            </div>

            {/* Desktop */}
        </div>
    );
};
export default FooterMobile;
