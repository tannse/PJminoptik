import ServiceCT5 from "../../../assets/ServiceCT5.jpg";
import { motion } from "framer-motion";
const Item4PC = () => {
    return (
        <div className="mbx:hidden mb:hidden dt:grid grid-cols-12 grid-rows-14   h-[70vh]  ">
            <motion.h3
                className="text-[40px] col-start-7 col-end-13 row-start-4 font-bold font-Exo text-black"
                initial={{ translateX: "30%", opacity: 0 }}
                whileInView={{ translateX: "0", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Ögonläkare nära dig
            </motion.h3>
            <motion.hr
                initial={{ width: "0%" }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="col-start-7 col-end-10 row-start-5 mt-4  border-[1px] border-black"
            />
            <p className="text-[25px] mt-[1em] text-black font-bold font-Exo  col-start-7 col-end-12 row-start-5 row-end-8 line-clamp-3">
                Min Optik erbjuder undersökning av legitimerad ögonläkare..
            </p>
            <p className="text-black text-[20px] col-start-7 col-end-12 font-Exo line-clamp-3 row-start-8 row-end-10 ">
                Hos oss får du bra service – Ögonläkare nära dig. Med jämna
                mellanrum kan du boka tid hos en ögonläkare i vår butik. Se alla
                lediga tider nedan!
            </p>
            <motion.button
                initial={{ scale: "80%" }}
                whileInView={{ scale: "100%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="StyleButtonNav group col-start-7 row-start-10"
            >
                <a
                    href="./"
                    className="group-hover:text-[1.5rem] w-[100%] ease-linear duration-150 "
                >
                    Se lediga tider
                </a>
            </motion.button>

            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className=" h-[50vh]  col-start-2 col-end-6 row-start-3 shadow-Shadow100  object-cover rounded-[5em] row-end-11 bg-premierColor  z-20"
                src={ServiceCT5}
                alt="Service Item"
            />
        </div>
    );
};
export default Item4PC;
