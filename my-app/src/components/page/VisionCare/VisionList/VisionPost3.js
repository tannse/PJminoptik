import React, { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";
import IconResure from "../../../assets/ResusBank.png";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { ShowDownAnimate } from "../../../Card UI/Animation";
import NotificationBuild from "../../../Card UI/notification";
import { AiFillWechat } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { ShowUpAnimate } from "../../../Card UI/Animation";
import useSupportMail from "../useSupportMail";
import SupportByMail from "../SupportByMail";
import useNotification from "../useNotification";
import { Button } from "@material-tailwind/react";

const VisionPost3 = (props) => {
    const { supportMail, handleSupportMail } = useSupportMail();
    const { notification, handleNotification } = useNotification();

    const [activeTag, setActiveTag] = useState(false);

    const HandleOpenOpenTag = (e) => {
        setActiveTag(!activeTag);
    };

    return (
        <div className=" flex justify-center items-center mt-[30px] h-[100vh] dt:h-[70vh] ">
            <div className="w-[calc(100%-10%)]">
                <div className="bg-premierColor dt:shadow-GreenShadow z-[400]">
                    <motion.div
                        {...ShowDownAnimate}
                        className=" dt:py-[40px] flex flex-col  justify-center gap-7  h-fit "
                    >
                        <h2 className="h2CustomPC text-[1.5rem] text-center py-[20px]  rounded-[20%] text-[#fff]">
                            Hej! Vad kan vi hjälpa till med?
                        </h2>
                        <div className="flex flex-col  dt:flex-row gap-x-8  justify-center">
                            {/* Support Customer Mobile View*/}
                            <div className="dt:hidden flex flex-col justify-center items-center gap-2">
                                <h3 className="text-[20px] font-semibold  text-white">
                                    Kundservice
                                </h3>
                                <p className="DescCustomPC text-center text-white">
                                    MinOptik Kundservice hjälper till med frågor
                                    om Lifestyle Glasögonabonnemang, Lifestyle
                                    Linsabonnemang, köp på Minoptik.se och
                                    frågor om företagsavtal.{" "}
                                </p>
                                <p className="DescCustomPC text-center text-white">
                                    Öppettider: TIS - FRE: 10:00 – 18.00 <br />
                                    LÖR: 10:00 – 13.00 <br />
                                    SÖN-MÅN: STÄNGT
                                </p>
                                <p className="DescCustomPC text-white">
                                    E-post: customerservice@synsam.com
                                </p>
                                <p className="DescCustomPC text-white">
                                    Telefon: 08 - 400 50 450
                                </p>
                                <p className="DescCustomPC text-white">
                                    Adress: Kompanigatan 2 A 235 31 Vellinge
                                </p>
                            </div>
                            <hr className="mt-[10px]" />
                            {/* Support Customer on PC view  */}
                            <div className=" hidden dt:flex dt:w-[25%] dt:hover:translate-y-[-10px] cursor-pointer dt:hover:shadow-whiteShadow duration-500  gap-y-[10px] dt:py-[10px] flex-col items-center dt:border-[3px] dt:rounded-[30px] dt:border-solid dt:border-white">
                                <img src={IconResure} alt="Reasure Bank" />
                                <span className="text-[16px] text-white font-bold font-Exo">
                                    DELBETALNING
                                </span>
                                <p className="text-white text-center">
                                    Dela upp din betalning. <br />
                                    Upp till 12 mån räntefritt
                                </p>
                            </div>
                            <Button
                                {...ShowUpAnimate}
                                className="StyleButtonNav dt:hidden self-center min-w-[40%] mt-[20px]  uppercase"
                            >
                                Boka Tid
                            </Button>
                            <div className="flex mt-[10px] gap-y-[10px] dt:hover:shadow-whiteShadow dt:hover:translate-y-[-10px] duration-300 rounded-[30px] flex-col items-center justify-center dt:border-[3px] dt:w-[25%] dt:border-solid dt:border-white">
                                <span className="text-[16px] text-white font-bold font-Exo">
                                    FOLJA OSS!
                                </span>
                                <div className="flex dt:top-[10px]">
                                    <a
                                        className="dt:hover:translate-y-[-10px] dt:hover:shadow-whiteShadow duration-[500ms]  flex items-center justify-center text-[30px] rounded-[20px] w-[40px] h-[40px] bg-[#fff]    "
                                        href="https://www.facebook.com/MinOptik"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <BiLogoFacebook />
                                    </a>
                                    <a
                                        className="dt:hover:translate-y-[-10px] dt:hover:shadow-whiteShadow duration-[500ms]  flex items-center justify-center text-[30px] rounded-[20px] w-[40px] h-[40px] bg-[#fff] ml-2 "
                                        href="https://www.instagram.com/minoptik/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR0vvDrrC2I73ljCZjxU68Yd-_2__zeEznX2P6NNpqVvwhn6ofEW0vJUO7Y"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <CiInstagram />
                                    </a>
                                </div>
                            </div>

                            <div></div>
                            {/* Support Customer PC by Tag */}
                            <div
                                onClick={HandleOpenOpenTag}
                                className="hidden gap-y-[10px] hover:translate-y-[-10px] hover:shadow-whiteShadow duration-500 cursor-pointer rounded-[30px] dt:flex  dt:flex-col dt:items-center dt:justify-center border-[3px] dt:text-white dt:w-[25%] dt:border-solid dt:border-white"
                            >
                                <span className="text-[16px] font-bold font-Exo">
                                    SKICKA EMAIL TILL OSS!
                                </span>
                                <div className="flex ">
                                    <p className="text-white text-[20px] mr-[20px]">
                                        VI SVARAR SÅ FORT VI KAN
                                    </p>
                                    <AiOutlineMail className="text-[30px] animate-bounce  text-white"></AiOutlineMail>
                                </div>
                            </div>
                        </div>
                        <section>
                            {activeTag === true && (
                                <div
                                    onClick={HandleOpenOpenTag}
                                    className="bg-bgOverlay fixed w-full w-full top-0 left-0 h-[100vh] transition-transform ease-in-out z-[400]  duration-500 "
                                ></div>
                            )}
                            {/* Support Option */}
                            <div
                                className={`fixed z-[999] left-[30%] flex justify-center transition-all ease-in-out duration-500  ${
                                    activeTag
                                        ? " top-[25%] opacity-100 "
                                        : " top-[-100%]  opacity-0 "
                                }`}
                            >
                                <div className=" relative border-[1px] border-solid border-white bg-premierColor w-[680px] rounded-xl ">
                                    <div className="px-[40px] py-[40px] font-Exo">
                                        <LiaTimesSolid
                                            onClick={HandleOpenOpenTag}
                                            className="absolute text-white left-[92%] top-[5%] text-26 font-semibold hover:rotate-90 hover:text-32 cursor-pointer duration-300 "
                                        />
                                        <h1 className="text-center pb-[25px] text-[2.5rem] font-semibold text-[#fff]">
                                            Kontakta oss
                                        </h1>
                                        <div className="bg-[#fff] text-[20px]   ">
                                            <div
                                                onClick={handleSupportMail}
                                                className=" px-[40px] py-[40px] group hover:bg-premierColor hover:text-white duration-300 cursor-pointer   flex  border-[1px] border-[#fff] "
                                            >
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

                                            <div
                                                onClick={handleNotification}
                                                className=" px-[40px] border-t-[#123830] hover:bg-premierColor group hover:text-white duration-300 cursor-pointer border-[1px]  py-[40px] flex "
                                            >
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
                        {/* SupportMail */}
                        {supportMail === true && <SupportByMail />}
                        {notification === true && <NotificationBuild />}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default VisionPost3;
