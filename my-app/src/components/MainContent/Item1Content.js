import { motion } from "framer-motion";
import ServiceCT1 from "../assets/ServiceCT1.png";
const Item1Content = () => {
    return (
        <div className="bg-premierColor  h-[100vh] ">
            <div className=" pt-[3.1rem]   px-[2.4rem] StyleFlexCol">
                <div className="border-solid border-white border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10px] StyleFlexCol">
                    <motion.h2
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h2CustomMobile"
                    >
                        En ny generation optiker
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="TitleCustomMobile"
                    >
                        Vi försöker hela tiden att förbättra och utbilda oss.
                    </motion.span>
                    <motion.p
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="DescCustomMobile"
                    >
                        Allt för att kunna hjälpa dig på bästa sätt. Välkommen
                        att inspireras! Vi har den senaste tekniken för att visa
                        Dig somkund skillnaden på olika glas och alla de
                        kvalitéer som marknaden har att erbjuda. Kom in i
                        butiken så visar vi mer med hjälp av bl.a. Zeiss.
                    </motion.p>
                    <button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        LÄS MER OCH HITTA TILL OSS
                    </button>
                </div>
            </div>
            <div className="flex justify-center relative">
                <motion.img
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    src={ServiceCT1}
                    className=" ImgCusTomMobile"
                />
            </div>
        </div>
    );
};
export default Item1Content;