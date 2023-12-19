import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";
import SynologenImg from "../../../Card UI/Synologen";

const FooterPC = () => {
    return (
        <div className=" relative mbx:hidden hidden  dt:block">
            {/* Desktop */}
            <div className=" absolute  z-[300] h-[50vh] dt:grid grid-cols-12 grid-rows-8 ">
                {/* Info1 */}

                <div className=" leading-7 col-start-2 col-end-4 row-start-3 ">
                    <h3 className="text-[1.5rem] mb-[1rem] font-bold font-Exo text-white">
                        Linser Och Glasögon
                    </h3>
                    <div className="flex flex-col">
                        <Link to="/Offer" className="text-white  capitalize">
                            Kontakt
                        </Link>

                        <Link
                            to="/WorkGlasses"
                            className="text-white capitalize"
                        >
                            Arbetsglasögon
                        </Link>

                        <Link to="/TorraOgon" className="text-white capitalize">
                            Torra ögon
                        </Link>

                        <Link
                            to="/GlassChild"
                            className="text-white capitalize"
                        >
                            Glasögon till barn
                        </Link>

                        <Link
                            to="/SunGlasses"
                            className="text-white capitalize"
                        >
                            Solglasögon
                        </Link>
                    </div>
                </div>
                <div className="leading-7 col-start-4 col-end-6  row-start-3">
                    <h3 className="text-[1.5rem] mb-[1rem] font-bold font-Exo text-white">
                        Synundersökning
                    </h3>
                    <Link to="/synvard" className="text-white capitalize">
                        Vad gör en optiker
                    </Link>
                </div>

                {/* Info2 */}

                <div className="col-start-6 col-end-8 row-start-3 ">
                    <div className="  leading-7 col-start-6 col-end-7 row-start-3  ">
                        <h3 className="text-[1.5rem] mb-[1rem] font-bold font-Exo text-white">
                            Information
                        </h3>
                        <div className="flex flex-col">
                            <Link
                                to="/PartialPayment"
                                alt="PartialPayment"
                                className="text-white capitalize"
                            >
                                delbetalning
                            </Link>
                            <Link to="" className="text-white capitalize">
                                boka tid
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-start-8 col-end-10 row-start-3 leading-7">
                    <h3 className="text-[1.5rem] mb-[1rem] font-bold font-Exo text-white">
                        Kontakt
                    </h3>
                    <Link to="/OptikLocation" className="text-white block">
                        Hitta till oss
                    </Link>

                    <a
                        href="tel:0798999999"
                        className="text-white block itaLinkcto='' "
                    >
                        Ringa 0798999999
                    </a>
                </div>
                <div className=" col-start-10 col-end-12  text-center row-start-3">
                    <span className="text-[1.5rem] items-center  font-Exo font-bold text-white uppercase">
                        Följ oss
                    </span>
                    <div className="flex justify-center mt-[0.5rem]">
                        <a
                            className="flex items-center justify-center text-[18px] rounded-[20px] w-[40px] h-[40px] bg-[#fff]    "
                            href="https://www.facebook.com/MinOptik"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BiLogoFacebook className="" />
                        </a>
                        <a
                            className="flex items-center justify-center text-[18px] rounded-[20px] w-[40px] h-[40px] bg-[#fff] ml-2 "
                            href="https://www.instagram.com/minoptik/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbcLinkdto='' =IwAR0vvDrrC2I73ljCZjxU68Yd-_2__zeEznX2P6NNpqVvwhn6ofEW0vJUO7Y"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <CiInstagram />
                        </a>
                    </div>
                </div>
                <div className="relative col-start-10 col-end-12 row-start-5 row-end-7 flex flex-col  ">
                    <SynologenImg></SynologenImg>
                    <span className=" self-end font-Exo  text-white mt-[1rem] ">
                        Kvlaitéts & Miöjöp
                    </span>
                </div>
                <hr className=" relative w-[100%] first-letter: border-dashed col-start-2 col-end-12 row-start-7 top-[15px]" />
                <div className="flex justify-between col-start-2 col-end-12 row-start-8 ">
                    <p className="text-white">
                        © Alla rättigheter förbehållna Min Optik
                    </p>
                    <p className="text-white">Skapad av Tanne</p>
                </div>
            </div>
            <div className="  relative h-[50vh] bg-cover bg-background-footer bg-center  brightness-50"></div>
        </div>
    );
};
export default FooterPC;
