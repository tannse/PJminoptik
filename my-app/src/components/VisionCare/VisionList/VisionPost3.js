import React, { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import IconResure from "../../assets/ResusBank.png";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { ShowDownAnimate } from "../../Card UI/Animation";
import { AiFillWechat } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

const VisionPost3 = () => {
    const [support, setSupport] = useState(true);
    const [overlay, setOverlay] = useState(true);

    const HandleSupportOption = (e) => {
        setSupport(!support);
        setOverlay(!overlay);
    };
    return (
        <motion.section
            {...ShowDownAnimate}
            className=" flex justify-center  mt-[30px] h-[50vh]"
        >
            <div className="w-[calc(100%-25%)]">
                <div className="bg-premierColor rounded-[30px]  shadow-GreenShadow px-[20px] h-[40vh]  ">
                    <div className="px-[20px] py-[40px] flex flex-col justify-center  h-fit ">
                        <h2 className="h2CustomPC self-center">
                            Hej! Vad kan vi hjälpa till med?
                        </h2>
                        <div className="flex mt-[50px] justify-between">
                            <div className="flex w-2/6 hover:translate-y-[-10px] cursor-pointer hover:shadow-whiteShadow duration-500  gap-y-[10px] py-[10px] flex-col items-center border-[3px] rounded-[30px] border-solid border-white">
                                <img src={IconResure} alt="Reasure Bank" />
                                <span className="text-[16px] text-white font-bold font-Exo">
                                    DELBETALNING
                                </span>
                                <p className="text-white">
                                    Dela upp din betalning - upp till 12 mån
                                    räntefritt
                                </p>
                            </div>
                            <div className="flex gap-y-[10px] hover:shadow-whiteShadow hover:translate-y-[-10px] duration-300 rounded-[30px] flex-col items-center justify-center border-[3px] w-1/6 border-solid border-white">
                                <span className="text-[16px] text-white font-bold font-Exo">
                                    FOLJA OSS!
                                </span>
                                <div className="flex top-[10px]">
                                    <a
                                        className="hover:translate-y-[-10px] hover:shadow-whiteShadow duration-[500ms]  flex items-center justify-center text-[30px] rounded-[20px] w-[40px] h-[40px] bg-[#fff]    "
                                        href="https://www.facebook.com/MinOptik"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <BiLogoFacebook />
                                    </a>
                                    <a
                                        className="hover:translate-y-[-10px] hover:shadow-whiteShadow duration-[500ms]  flex items-center justify-center text-[30px] rounded-[20px] w-[40px] h-[40px] bg-[#fff] ml-2 "
                                        href="https://www.instagram.com/minoptik/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR0vvDrrC2I73ljCZjxU68Yd-_2__zeEznX2P6NNpqVvwhn6ofEW0vJUO7Y"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <CiInstagram />
                                    </a>
                                </div>
                            </div>

                            <div
                                onClick={HandleSupportOption}
                                className="flex gap-y-[10px] hover:translate-y-[-10px] hover:shadow-whiteShadow duration-500 cursor-pointer rounded-[30px]  flex-col items-center justify-center border-[3px] text-white w-2/6 border-solid border-white"
                            >
                                <span className="text-[16px] font-bold font-Exo">
                                    SKICKA EMAIL TILL OSS!
                                </span>
                                <div className="flex ">
                                    <p className="text-white text-[20px] mr-[20px]">
                                        ANSVARA SÅ FORT VI KAN
                                    </p>
                                    <AiOutlineMail className="text-[30px] animate-bounce  text-white"></AiOutlineMail>
                                </div>
                            </div>
                        </div>
                        {/* Support Option */}
                        <section>
                            <div
                                onClick={HandleSupportOption}
                                className={`bg-bgOverlay w-full top-0 left-0 h-[100vh] transition-transform ease-in-out duration-500 ${
                                    overlay ? "hidden " : " fixed w-full"
                                }`}
                            ></div>
                            <div
                                className={`fixed z-[999] left-[30%] flex justify-center transition-all ease-in-out duration-500  ${
                                    support
                                        ? " top-[-100%]  opacity-0"
                                        : "  top-[25%] opacity-100"
                                }`}
                            >
                                <div className=" relative border-[1px] border-solid border-white bg-premierColor w-[680px] rounded-xl ">
                                    <div className="px-[40px] py-[40px] font-Exo">
                                        <LiaTimesSolid
                                            onClick={HandleSupportOption}
                                            className="absolute text-white left-[92%] top-[5%] text-26 font-semibold hover:rotate-90 hover:text-32 cursor-pointer duration-300 "
                                        />
                                        <h1 className="text-center pb-[25px] text-[2.5rem] font-semibold text-[#fff]">
                                            Kontakta oss
                                        </h1>
                                        <div className="bg-[#fff] text-[20px]  ">
                                            <div className=" px-[40px] py-[40px] group hover:bg-premierColor hover:text-white duration-300 cursor-pointer   flex  border-[1px] border-[#fff] ">
                                                <AiOutlineMail className="group-hover:animate-bounce text-[30px]" />
                                                <div className="ml-[20px] flex items-center">
                                                    <p>Meila till Oss!</p>
                                                    <span className="text-[16px] italic ml-[20px]">
                                                        (rekomendera{" "}
                                                        <span className="text-[#b82d2d]">
                                                            &#x2764;&#x2764;
                                                        </span>{" "}
                                                        )
                                                    </span>
                                                </div>
                                            </div>
                                            <div className=" px-[40px] border-t-[#123830] hover:bg-premierColor group hover:text-white duration-300 cursor-pointer border-[1px]  py-[40px] flex ">
                                                <AiFillWechat className="group-hover:animate-bounce text-[30px]" />
                                                <div className="ml-[20px] flex items-center">
                                                    <p>Chatta Med Oss</p>
                                                    <span className="text-[16px] italic ml-[20px]">
                                                        (Vi svara sa fort som
                                                        mojligt{" "}
                                                        <span className="text-[#b82d2d]">
                                                            &#x2764;
                                                        </span>{" "}
                                                        )
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
export default VisionPost3;
