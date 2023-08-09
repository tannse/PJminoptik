import ServiceCT3 from "../assets/ServiceCT3.jpg";

import { motion } from "framer-motion";
const Item3PC = () => {
    return (
        <div className="mbx:hidden mb:hidden overflow-hidden dt:grid grid-cols-12 grid-rows-14  bg-premierColor h-[100vh]  relative">
            <motion.h3
                className="text-[40px] col-start-2 col-end-7 row-start-4 font-bold font-Exo text-white"
                initial={{ translateX: "-30%", opacity: 0 }}
                whileInView={{ translateX: "0", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Vi är här för dig
            </motion.h3>
            <motion.hr
                initial={{ width: "0%" }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="col-start-2 col-end-5 row-start-5  mt-4  border-[1px] border-white"
            />
            <p className="text-[25px]  text-white font-bold font-Exo line-clamp- col-start-2 col-end-6 row-start-6">
                Vi tror på kompetens, valfrihet och omtanke.
            </p>
            <p className="text-white text-[18px] col-start-2 col-end-6 row-start-7 ">
                Hit kan du komma när du behöver en noggrann synundersökning av
                vår optiker Charlotta, köpa kontaktlinser med personlig service
                över disk, eller bara vill ta en espresso och inspireras av det
                senaste glasögonmodet.
            </p>
            <motion.button
                initial={{ scale: "80%" }}
                whileInView={{ scale: "100%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="StyleButtonNav group shadow-whiteShadow50 col-start-2 row-start-10"
            >
                <a
                    href="./"
                    className="group-hover:text-[1.5rem] w-[100%] ease-linear duration-150 "
                >
                    Boka tid online
                </a>
            </motion.button>

            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="  col-start-7 shadow-whiteShadow col-end-12 row-start-3 row-end-13 h-[80vh]  object-cover z-20"
                src={ServiceCT3}
                alt="Service Item"
            />
        </div>
    );
};
export default Item3PC;
