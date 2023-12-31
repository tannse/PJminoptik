import { motion } from "framer-motion";
import CertificateLogoIso from "../../../assets/CertificateLogoIso.webp";
import { Button } from "@material-tailwind/react";

const Item5Content = () => {
    return (
        <div className="bg-premierColor mbx:h-[90vh] dt:hidden ">
            <div className=" pt-[1rem]   px-[2.2rem] StyleFlexCol">
                <div className="border-solid border-white border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10px] StyleFlexCol">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h2CustomMobile"
                    >
                        Vi är ISO Certifierade
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />

                    <motion.p
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="DescCustom"
                    >
                        Synologen är en medlems organisation med en central
                        ledning som hjälper medlem marnaatt driva utvecklingen
                        framåt. Tillsammans skapar vi mervärden som gör att vi
                        stärkervår position och konkurrenskraft som en
                        sammanslutning av experter.
                    </motion.p>
                    <Button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        <a
                            rel="noreferrer"
                            href="https://www.synologen.se/om-oss/var-kvalitets-och-miljopolicy/"
                            alt="synologen"
                            target="_blank"
                        >
                            Läser mer här
                        </a>
                    </Button>
                </div>
            </div>
            <div className="flex justify-center  ">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    src={CertificateLogoIso}
                    className=" h-fit mt-[20px] object-cover dt:object-none "
                />
            </div>
        </div>
    );
};
export default Item5Content;
