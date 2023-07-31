import { motion } from "framer-motion";
const Item3Content = () => {
    return (
        <div className=" mb-[10rem] bg-premierColor">
            <div className=" h-[100vh]   px-[2.4rem] StyleFlexCol">
                <div className="border-solid border-white border-[2px] rounded-[15px] py-[20px] px-[10px] mt-[10rem] StyleFlexCol">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="h2CustomMobile"
                    >
                        Vi är här för dig
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="TitleCustomMobile"
                    >
                        Vi tror på kompetens, valfrihet och omtanke.
                    </motion.span>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
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
        </div>
    );
};
export default Item3Content;
