import { motion } from "framer-motion";
import ServiceCT2 from "../../../assets/ServiceCT2.jpg";
import { Button } from "@material-tailwind/react";

const Item2Content = () => {
    return (
        <div className=" dt:hidden h-fit bg-[#FFF]">
            <div className="  pt-[3.1rem]      px-[2.2rem] StyleFlexCol">
                <div className="border-solid border-green-900 border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10px] StyleFlexCol">
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
                        className="DescCustom text-black"
                    >
                        Min Optik är en del av Synologen somär bäst påbemötande,
                        engagemangoch branschkunskap i Sverige.
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="DescCustom text-black"
                    >
                        Allt för att kunna hjälpa dig på bästa sätt. Välkommen
                        att inspireras! Vi har den senaste tekniken för att visa
                        Dig somkund skillnaden på olika glas och alla de
                        kvalitéer som marknaden har att erbjuda. Kom in i
                        butiken så visar vi mer med hjälp av bl.a. Zeiss.
                    </motion.p>
                    <Button className="  dt:block mt-[15px] StyleButtonNav font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton">
                        LÄS MER OCH HITTA TILL OSS
                    </Button>
                </div>
            </div>
            <div className="flex ">
                <motion.img
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    src={ServiceCT2}
                    className=" relative pt-[20px] ImgCusTomMobile"
                />
            </div>
        </div>
    );
};
export default Item2Content;
