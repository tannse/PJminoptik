import BGfooter from "../Card UI/BGfooter";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
const FooterBlock = () => {
    return (
        <div className=" relative h-[70vh] ">
            <div className=" absolute z-[999]  grid grid-cols-2 grid-rows-3 gap-10  px-[30px]  inset-0  py-[50px]">
                {/* Info1 */}

                <div>
                    <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                        Linser & Glasögon
                    </h3>
                    <ul>
                        <li className="text-white capitalize">Kontaklinser</li>
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
                <div className="">
                    <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                        Synundersökning
                    </h3>
                    <p className="text-white capitalize">Vad gör en optiker</p>
                </div>

                {/* Info2 */}

                <div>
                    <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                        Information
                    </h3>
                    <ul>
                        <li className="text-white capitalize">delbetalning</li>
                        <li className="text-white capitalize">boka tid</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-[1.2rem] mb-[1rem] font-bold font-Exo text-white">
                        Kontakt
                    </h3>
                    <span className="text-white"> Hitta till oss</span>
                </div>
                <div>
                    <span className="text-20  font-Exo font-bold text-white uppercase">
                        Följ oss
                    </span>
                    <div className="flex mt-[0.5rem]">
                        <a
                            className="flex items-center justify-center text-[18px] rounded-[20px] w-[28px] h-[28px] bg-[#fff]    "
                            href="./"
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
            </div>
            <BGfooter></BGfooter>
        </div>
    );
};
export default FooterBlock;
