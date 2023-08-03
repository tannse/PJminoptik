import { motion } from "framer-motion";
import ServiceCT4 from "../assets/ServiceCT5.jpg";
const Item4Content = () => {
    return (
        <div className="bg-white  h-[100vh] ">
            <div className="  px-[2.4rem] StyleFlexCol">
                <div className="border-solid border-green-700 border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[8rem] StyleFlexCol">
                    <motion.h2
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="h2CustomMobile text-black"
                    >
                        Ögonläkare nära dig
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="TitleCustomMobile text-black"
                    >
                        Min Optik erbjuder undersökning av legitimerad
                        ögonläkare.
                    </motion.span>
                    <motion.p
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="DescCustomMobile text-black"
                    >
                        Hos oss får du bra service Ögonläkare nära dig.Med jämna
                        mellanrum kan du boka tid hos en ögonläkare i vår butik.
                        Se alla lediga tider nedan.
                    </motion.p>
                    <button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        Se lediga tider
                    </button>
                </div>
            </div>
            <div className="flex justify-center relative">
                <motion.img
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    src={ServiceCT4}
                    className=" ImgCusTomMobile object-cover"
                />
            </div>
        </div>
    );
};
export default Item4Content;
