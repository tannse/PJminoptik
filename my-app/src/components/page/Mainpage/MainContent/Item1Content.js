import { motion } from "framer-motion";
import ServiceCT1 from "../../../assets/ServiceCT1.webp";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Item1Content = () => {
    return (
        <div className="bg-premierColor  mbx:block  h-fit dt:hidden">
            <div className=" pt-[1rem]   px-[2.2rem] StyleFlexCol">
                <div className="border-solid border-white border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10px] StyleFlexCol">
                    <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                        className="h2CustomMobile "
                    >
                        En ny generation optiker
                    </motion.h2>
                    <hr className="w-[30%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                        className="TitleCustomMobile"
                    >
                        Vi försöker hela tiden att förbättra och utbilda oss.
                    </motion.span>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                        className="DescCustom"
                    >
                        Allt för att kunna hjälpa dig på bästa sätt. Välkommen
                        att inspireras! Vi har den senaste tekniken för att visa
                        Dig somkund skillnaden på olika glas och alla de
                        kvalitéer som marknaden har att erbjuda. Kom in i
                        butiken så visar vi mer med hjälp av bl.a. Zeiss.
                    </motion.p>
                    <Button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-10 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        <Link to="/OptikLocation">
                            LÄS MER OCH HITTA TILL OSS
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex ">
                <motion.img
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                    src={ServiceCT1}
                    className=" pt-[20px] relative bottom-0 ImgCusTomMobile"
                />
            </div>
        </div>
    );
};
export default Item1Content;
