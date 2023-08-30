import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import IconResure from "../../assets/ResusBank.png";
import { AiOutlineMail } from "react-icons/ai";

const VisionPost3 = () => {
    return (
        <section className=" flex justify-center  mt-[30px] h-[50vh]">
            <div className="w-[calc(100%-25%)]">
                <div className="bg-premierColor rounded-[30px]  shadow-GreenShadow px-[20px] h-[40vh]  ">
                    <div className="px-[20px] py-[40px] flex flex-col justify-center  h-fit ">
                        <h2 className="h2CustomPC self-center">
                            Hej! Vad kan vi hjälpa till med?
                        </h2>
                        <div className="flex mt-[50px] justify-between">
                            <div className="flex w-2/6 gap-y-[10px] py-[10px] flex-col items-center border-[3px] rounded-[30px] border-solid border-white">
                                <img src={IconResure}></img>
                                <span className="text-[16px] text-white font-bold font-Exo">
                                    DELBETALNING
                                </span>
                                <p className="text-white">
                                    Dela upp din betalning - upp till 12 mån
                                    räntefritt
                                </p>
                            </div>
                            <div className="flex gap-y-[10px] rounded-[30px] flex-col items-center justify-center border-[3px] w-1/6 border-solid border-white">
                                <span className="text-[16px] text-white font-bold font-Exo">
                                    FOLJA OSS!
                                </span>
                                <div className="flex">
                                    <a
                                        className="flex items-center justify-center text-[30px] rounded-[20px] w-[40px] h-[40px] bg-[#fff]    "
                                        href="https://www.facebook.com/MinOptik"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <BiLogoFacebook className="" />
                                    </a>
                                    <a
                                        className="flex items-center justify-center text-[30px] rounded-[20px] w-[40px] h-[40px] bg-[#fff] ml-2 "
                                        href="https://www.instagram.com/minoptik/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR0vvDrrC2I73ljCZjxU68Yd-_2__zeEznX2P6NNpqVvwhn6ofEW0vJUO7Y"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <CiInstagram />
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-y-[10px] rounded-[30px]  flex-col items-center justify-center border-[3px] text-white w-2/6 border-solid border-white">
                                <span className="text-[16px] font-bold font-Exo">
                                    SKICKA EMAIL TILL OSS!
                                </span>
                                <div className="flex ">
                                    <p className="text-white text-[20px] mr-[20px]">
                                        ANSVARA SÅ FORT VI KAN
                                    </p>
                                    <AiOutlineMail className="text-[30px]   text-white"></AiOutlineMail>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default VisionPost3;
