import { motion } from "framer-motion";
const Item5Content = () => {
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
                        Vi är ISO Certifierade
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="DescCustomMobile"
                    >
                        Synologen är en medlems organisation med en central
                        ledning som hjälper medlem marnaatt driva utvecklingen
                        framåt. Tillsammans skapar vi mervärden som gör att vi
                        stärkervår position och konkurrenskraft som en
                        sammanslutning av experter.
                    </motion.p>
                    <button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        Läser mer här
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Item5Content;
