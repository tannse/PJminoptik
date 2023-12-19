import Extranav1 from "../../../assets/Extranav-1.jpg";
import Extranav2 from "../../../assets/Extranav-2.jpg";
import Extranav3 from "../../../assets/Extranav-3.jpg";
import Extranav4 from "../../../assets/Extranav-4.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
const ExtraNav = () => {
    return (
        <div>
            <ul className="h-[80vh] mbx:h-[60vh] scroll-none dt:hidden flex flex-col items-center justify-evenly mx-[36px]">
                <Link
                    to="/synvard"
                    alt="synvard"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Button className="StyleButtonNav ">Synundersökning</Button>
                </Link>

                <Link
                    to="/Glasses"
                    alt="Glasses"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Button className="StyleButtonNav">Glasögon</Button>
                </Link>

                <Link
                    to="/Offer"
                    alt="Offer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Button className="StyleButtonNav">Kontaktlinser</Button>
                </Link>

                <Link
                    to="/SunGlasses"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Button className="StyleButtonNav">Solglasögon</Button>
                </Link>
            </ul>

            <ul
                className="hidden rounded-sm border-stone-400 dt:justify-evenly   dt:flex dt:pb-[100px] dt:w-[100%] 
            bg-premierColor duration-200 ease-in-out transition-all  dt:items-center p-[50px]  dt:object-cover  "
            >
                <Link
                    to="/synvard"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-1/5 flex flex-col justify-center group cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[65%] w-[100%] h-[20vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav1}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] child uppercase group-hover:translate-y-[-15vh] text-[2.1rem] customAnimation   font-extrabold text-white"
                    >
                        synundersokning
                    </a>
                </Link>

                <Link
                    to="/Glasses"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-1/5 flex flex-col justify-center group  cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[65%] w-[100%] h-[20vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav2}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] text-[2.1rem] customAnimation   font-extrabold text-white"
                    >
                        Glasögon
                    </a>
                </Link>

                <Link
                    to="/Offer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-1/5 flex flex-col justify-center group cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[65%] w-[100%] h-[20vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav3}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] text-[2.1rem] customAnimation   font-extrabold text-white"
                    >
                        kontaktlinser
                    </a>
                </Link>

                <Link
                    to="/SunGlasses"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-1/5 flex flex-col justify-center group cursor-pointer items-center border-2 rounded-xl border-white hover:shadow-buttonShadow  customAnimation   "
                >
                    <img
                        alt="minoptik"
                        className=" group-hover:brightness-[65%] w-[100%] h-[20vh] object-cover   customAnimation   rounded-t-xl   "
                        src={Extranav4}
                    ></img>
                    <a
                        href="./"
                        className="text-[25px] uppercase group-hover:translate-y-[-15vh] text-[2.1rem] customAnimation   font-extrabold text-white"
                    >
                        solglasogon
                    </a>
                </Link>
            </ul>
        </div>
    );
};
export default ExtraNav;
