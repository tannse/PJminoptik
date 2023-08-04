import { motion } from "framer-motion";
import ServiceCT2 from "../assets/ServiceCT2.jpg";
const Item2Content = () => {
    return (
        <div className=" mb-[10rem] h-[100vh] bg-[#fff]">
            <div className="     px-[2.4rem] StyleFlexCol">
                <div className="border-solid border-green-700 border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10rem] StyleFlexCol">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h2CustomMobile text-black    "
                    >
                        Bästa servicen
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="TitleCustomMobile text-black"
                    >
                        Min Optik är en del av Synologen somär bäst påbemötande,
                        engagemangoch branschkunskap i Sverige.
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="DescCustomMobile text-black"
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    src={ServiceCT2}
                    className=" ImgCusTomMobile"
                />
            </div>
        </div>
    );
};
export default Item2Content;
