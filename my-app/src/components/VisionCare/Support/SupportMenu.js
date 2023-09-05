import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
const SupportMenu = (props) => {
    const [overlay, setOverlay] = useState(true);
    const HandleOverlay = () => {
        setOverlay(false);
        console.log("đã click vào overlay");
    };
    return (
        <section>
            <div
                onClick={HandleOverlay}
                className={`bg-bgOverlay w-full top-0 left-0 h-[100vh] transition-transform ease-in-out duration-500 ${
                    props.support ? " fixed" : " hidden scale-0"
                } && ${overlay ? "w-full" : "w-0"}`}
            ></div>
            <div
                className={`fixed z-[999] left-[30%] flex justify-center transition-all ease-in-out duration-500  ${
                    props.support
                        ? " top-[25%] opacity-100"
                        : "  top-[-100%]  opacity-0"
                }`}
            >
                <div className=" bg-premierColor w-[680px] rounded-xl ">
                    <div className="px-[40px] py-[40px] font-Exo">
                        <h1 className="text-center text-[2.5rem] font-semibold text-[#fff]">
                            Kontakta oss
                        </h1>
                        <div className="bg-[#fff] text-[20px]  ">
                            <div className=" px-[40px] py-[40px] hover:bg-premierColor hover:text-white duration-300 cursor-pointer   flex  border-[1px] border-[#fff] ">
                                <AiOutlineMail className="text-[30px]" />
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
                            <div className=" px-[40px] border-t-[#123830] hover:bg-premierColor hover:text-white duration-300 cursor-pointer border-[1px]  py-[40px] flex ">
                                <AiFillWechat className="text-[30px]" />
                                <div className="ml-[20px] flex items-center">
                                    <p>Chatta Med Oss</p>
                                    <span className="text-[16px] italic ml-[20px]">
                                        (Vi svara sa fort som mojligt{" "}
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
    );
};
export default SupportMenu;
