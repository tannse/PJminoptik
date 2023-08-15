import ItemCerti from "../../assets/ServiceCT5.gif";

import { motion } from "framer-motion";
const Item5PC = () => {
    return (
        <div className="mbx:hidden mb:hidden dt:grid grid-cols-12 grid-rows-14 shadow-Shadow bg h-[60vh]  relative">
            <motion.h3
                className="text-[40px] col-start-2 col-end-7 row-start-3 font-bold font-Exo text-black"
                initial={{ translateX: "-30%", opacity: 0 }}
                whileInView={{ translateX: "0", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Vi är ISO Certifierade
            </motion.h3>
            <motion.hr
                initial={{ width: "0%" }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="col-start-2 col-end-5 row-start-5  mt-4  border-[1px] border-black"
            />

            <p className="text-black text-[18px] font-semibold  font-Exo font- col-start-2 col-end-6 row-start-6 ">
                Synologen är en medlemsorganisation med en central ledning som
                hjälper medlemmarna att driva utvecklingen framåt. Tillsammans
                skapar vi mervärden som gör att vi stärker vår position och
                konkurrenskraft som en sammanslutning av experter.
            </p>
            <motion.button
                initial={{ scale: "80%" }}
                whileInView={{ scale: "100%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="StyleButtonNav group col-start-2 row-start-11"
            >
                <a
                    href="./"
                    className="group-hover:text-[1.5rem] w-[100%] ease-linear duration-150 "
                >
                    Boka tid online
                </a>
            </motion.button>

            <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="   col-start-7 col-end-12 row-start-3 row-end-13   object-none z-20"
                src={ItemCerti}
                alt="Service Item"
            />
        </div>
    );
};
export default Item5PC;
