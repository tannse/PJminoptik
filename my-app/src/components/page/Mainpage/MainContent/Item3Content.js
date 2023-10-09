import { motion } from "framer-motion";
import ServiceCT3 from "../../../assets/ServiceCT3.jpg";
import { Button } from "@material-tailwind/react";

const Item3Content = () => {
    return (
        <div className="bg-premierColor  h-fit  dt:hidden">
            <div className=" pt-[3.1rem]   px-[2.2rem] StyleFlexCol">
                <div className="border-solid border-white border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10px] StyleFlexCol">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h2CustomMobile"
                    >
                        Vi är här för dig
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="TitleCustomMobile"
                    >
                        Vi tror på kompetens, valfrihet och omtanke.
                    </motion.span>
                    <motion.p
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="DescCustom "
                    >
                        Hit kan du komma när du behöver en noggrann
                        synundersökning av vår optiker Charlotta, köpa
                        kontaktlinser med personlig service över disk, eller
                        bara vill ta en espresso och inspireras av det senaste
                        glasögonmodet.
                    </motion.p>
                    <Button className=" StyleButtonNav">Boka tid online</Button>
                </div>
            </div>
            <div className="flex justify-center ">
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    src={ServiceCT3}
                    className="relative pt-[20px] ImgCusTomMobile "
                />
            </div>
        </div>
    );
};
export default Item3Content;
