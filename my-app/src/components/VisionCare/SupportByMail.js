import React, { useState, useRef, useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import emailjs from "@emailjs/browser";
import useSupportMail from "./useSupportMail";

const SupportByMail = (props) => {
    const { supportMail, handleSupportMail } = useSupportMail();
    const [userSelect, setUserSelect] = useState("");
    const form = useRef();
    const HandleuserSelect = (e) => {
        const selectValue = e.target.value;
        setUserSelect(selectValue);
    };
    useEffect(() => {
        console.log(userSelect);
    }, [userSelect]);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6f7dy2j",
                "template_562qjqg",
                form.current,
                "7bxnr4RHq4tD3rmaK"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Tack for att kontact till oss");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className={`${supportMail ? "hidden " : " "}`}>
            <div className="fixed w-[680px] rounded-xl bg-premierColor Hidden-scroll-bar max-h-full overflow-y-auto top-[7%] opacity-100  left-[30%] flex justify-center transition-all ease-in-out duration-500  z-[4000] ">
                <div className="px-[40px] py-[20px]  rounded-xl ">
                    <div className="h-[125vh]">
                        <LiaTimesSolid
                            onClick={handleSupportMail}
                            className="absolute   text-white left-[92%] text-26 font-semibold hover:rotate-90 hover:text-32 cursor-pointer duration-300 "
                        />
                        <h2 className="text-center  capitalize pb-[15px] h2CustomPC  font-semibold text-[#fff]">
                            Kontakta oss
                        </h2>
                        <ul className="flex   DescCustomPC pb-[25px] text-white ">
                            <li>
                                <a className="underline" href="./">
                                    Start
                                </a>
                            </li>
                            <li className="ml-[5px]">
                                <span> &gt; </span>
                            </li>
                            <li className="ml-[5px]">
                                <span>Mejla oss!</span>
                            </li>
                        </ul>
                        <div className="bg-[#fff] h-fit px-[40px] rounded-lg py-[20px] max-w-fit">
                            <div className=" flex flex-col font-medium">
                                <h3 className="mb-[15px] text-custom-darkgreen text-[20px] font-semibold ">
                                    Skicka ett mail till Min-Optik kundservice
                                </h3>
                                <p className="DescCustomPC  mt-[15px]">
                                    Synsams centrala kundservice hanterar frågor
                                    om Lifestyle Glasögonabonnemang, Lifestyle
                                    Linsabonnemang, köp på synsam.se och frågor
                                    om företagsavtal.
                                </p>
                                <span className="  mt-[15px]">
                                    Fält med{" "}
                                    <span className="text-[#fe4f4f]  font-extrabold text-[15px]">
                                        *
                                    </span>{" "}
                                    är obligatoriska
                                </span>
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="flex flex-col text-custom-darkgreen font-bold gap-3"
                                >
                                    <div className="grid grid-cols-2 gap-x-[25px] ">
                                        <div className=" mb-[25px] ">
                                            <span className="mb-[10px] ">
                                                Förnamn
                                                <span className="text-[#fe4f4f] ml-[5px] font-extrabold text-[15px]">
                                                    *
                                                </span>{" "}
                                            </span>
                                            <input
                                                type="text"
                                                name="user_first_name"
                                                className=" rounded-lg border-[0.5px] p-[15px] border-solid  w-full"
                                            />
                                        </div>
                                        <div className=" mb-[25px] ">
                                            <span className="mb-[10px]">
                                                Efternamn
                                            </span>
                                            <input
                                                type="text"
                                                name="user_last_name"
                                                className="rounded-lg border-[1px] p-[15px] border-solid  w-full"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" mb-[25px] ">
                                            <span className="mb-[10px]">
                                                E-mail
                                                <span className="text-[#fe4f4f] ml-[5px] font-extrabold text-[15px]">
                                                    *
                                                </span>{" "}
                                            </span>
                                            <input
                                                type="email"
                                                name="user_email"
                                                className="rounded-lg border-[1px] p-[15px] border-solid  w-full"
                                            />
                                        </div>
                                        <div className=" mb-[25px]">
                                            <label>
                                                Vad handlar ditt ärende om?
                                                <span className="text-[#fe4f4f] ml-[5px] font-extrabold text-[15px]">
                                                    *
                                                </span>{" "}
                                            </label>
                                            <select
                                                value={userSelect}
                                                type="select"
                                                name="user_select"
                                                onChange={HandleuserSelect}
                                                className="rounded-lg border-[1px] p-[15px] border-solid  w-full"
                                            >
                                                <option>
                                                    Minoptik Glasögonabonnemang
                                                </option>
                                                <option>
                                                    Köpa på Minoptik.se
                                                </option>
                                                <option>KontakLinser</option>
                                                <option>Synundersökning</option>
                                                <option>Annat frågor</option>
                                            </select>
                                        </div>
                                        <div className=" ">
                                            <span>
                                                Beskriv ditt ärende
                                                <span className="text-[#fe4f4f] ml-[5px] font-extrabold text-[15px]">
                                                    *
                                                </span>{" "}
                                            </span>
                                            <textarea
                                                type="text"
                                                name="user_info"
                                                className="rounded-lg border-[1px] min-h-[100px] p-[15px] border-solid  w-full"
                                            />
                                        </div>
                                        <p className="DescCustomPC my-[15px]">
                                            För att kunna hjälpa dig behöver vi
                                            dina personuppgifter. Genom att
                                            skicka din förfrågan godkänner du
                                            att Min Optik behandlar dina
                                            personuppgifter.
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <span className="">
                                                Ordernummer / Kundnummer /
                                                födelsedatum (ÅÅÅÅMMDD)
                                            </span>
                                            <input
                                                type="text"
                                                name="user_info"
                                                className="rounded-lg border-[1px] p-[15px] border-solid  w-full"
                                                placeholder="Ange till exempel ordernummer eller annan relevant information"
                                            />
                                        </div>
                                        <button
                                            className="mt-[10px] float-right capitalize left-[100%] p-[15px] text-[1rem] min-w-fit StyleButtonNav"
                                            type="submit"
                                        >
                                            Skicka
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#fff] text-[20px]  "></div>
                </div>
            </div>
            <div
                onClick={handleSupportMail}
                className="bg-bgOverlay overflow-hidden  fixed w-full  top-0 left-0 h-[100vh] transition-transform ease-in-out duration-500 z-[3000] "
            ></div>
        </section>
    );
};

export default SupportByMail;
