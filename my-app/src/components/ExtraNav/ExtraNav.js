import Extranav1 from "../assets/Extranav-1.jpg";
import Extranav2 from "../assets/Extranav-2.jpg";
import Extranav3 from "../assets/Extranav-3.jpg";
import Extranav4 from "../assets/Extranav-4.jpg";
import { motion } from "framer-motion";
const ExtraNav = () => {
    return (
        <div>
            <ul className=" scroll-none dt:hidden flex flex-col items-center my-[25px] mx-[36px]">
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="StyleButtonNav "
                >
                    Synundersökning
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="StyleButtonNav"
                >
                    Glasögon
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="StyleButtonNav"
                >
                    Kontaktlinser
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="StyleButtonNav"
                >
                    Solglasögon
                </motion.li>
            </ul>

            <ul className="hidden rounded-sm border-stone-300 dt:justify-evenly   dt:flex  dt:w-[100%] bg-premierColor duration-300 ease-in-out transition-all  dt:items-center p-[50px]  dt:object-cover  ">
                <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/5 flex flex-col justify-center group cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[90%] w-[100%] h-[30vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav1}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] group-hover:text-[35px] customAnimation   font-extrabold text-white"
                    >
                        synundersokning
                    </a>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/5 flex flex-col justify-center group  cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[90%] w-[100%] h-[30vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav2}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] group-hover:text-[35px] customAnimation   font-extrabold text-white"
                    >
                        Glasögon
                    </a>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/5 flex flex-col justify-center group cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[90%] w-[100%] h-[30vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav3}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] group-hover:text-[35px] customAnimation   font-extrabold text-white"
                    >
                        kontaktlinser
                    </a>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/5 flex flex-col justify-center group cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[95%] w-[100%] h-[30vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav4}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] group-hover:text-[35px] customAnimation   font-extrabold text-white"
                    >
                        solglasogon
                    </a>
                </motion.li>
            </ul>
        </div>
    );
};
export default ExtraNav;
