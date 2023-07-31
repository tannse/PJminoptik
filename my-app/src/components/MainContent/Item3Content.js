import { motion } from "framer-motion";
import ServiceCT3 from "../assets/ServiceCT3.jpg";
const Item3Content = () => {
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
                        Vi är här för dig
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="TitleCustomMobile"
                    >
                        Vi tror på kompetens, valfrihet och omtanke.
                    </motion.span>
                    <motion.p
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="DescCustomMobile"
                    >
                        Hit kan du komma när du behöver en noggrann
                        synundersökning av vår optiker Charlotta, köpa
                        kontaktlinser med personlig service över disk, eller
                        bara vill ta en espresso och inspireras av det senaste
                        glasögonmodet.
                    </motion.p>
                    <button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        Boka tid online
                    </button>
                </div>
            </div>
            <div className="flex justify-center relative">
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    src={ServiceCT3}
                    className=" ImgCusTomMobile"
                />
            </div>
        </div>
    );
};
export default Item3Content;
