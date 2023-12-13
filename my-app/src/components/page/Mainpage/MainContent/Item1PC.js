import Item1Photo from "../../../assets/Item1Photo.png";
import { Link } from "react-router-dom";
import ServiceCT1 from "../../../assets/ServiceCT1.png";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";

const Item1PC = () => {
    return (
        <div className="mbx:hidden mb:hidden dt:grid grid-cols-12 grid-rows-14 bg-premierColor h-[100vh]  ">
            <motion.h3
                className="text-[40px] col-start-2 col-end-7 row-start-3 font-bold font-Exo text-white"
                initial={{ translateX: "-30%", opacity: 0 }}
                whileInView={{ translateX: "0", opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                En ny generation optiker
            </motion.h3>
            <motion.hr
                initial={{ width: "0%" }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="col-start-2 col-end-5 row-start-4  mt-4  border-[1px] border-white"
            />
            <p className="text-[25px]  text-white font-bold font-Exo line-clamp- col-start-2 col-end-6 row-start-5">
                Vi försöker hela tiden att förbättra och utbilda oss.
            </p>
            <p className="text-white text-[18px] col-start-2 col-end-6 row-start-7 row-end-9 ">
                Allt för att kunna hjälpa dig på bästa sätt. Välkommen att
                inspireras! Vi har den senaste tekniken för att visa Dig som
                kund skillnaden på olika glas och alla de kvalitéer som
                marknaden har att erbjuda. Kom in i butiken så visar vi mer med
                hjälp av bl.a. Zeiss.
            </p>
            <Link
                to="/OptikLocation"
                className="StyleButtonNav w-full col-start-2 col-end-4 row-start-10"
            >
                <Button className="w-full">Hitta Till Oss</Button>
            </Link>

            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="  col-start-6 col-end-9 rounded-[999px] shadow-whiteShadow50 row-start-1 row-end-8 w-[100%]  object-contain z-20"
                src={Item1Photo}
                alt="Service Item"
            />
            <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className=" col-start-9 col-end-12    rounded-[999px] shadow-whiteShadow50 row-start-6 row-end-12 w-[100%]  object-cover z-20"
                src={ServiceCT1}
                alt="Service Item"
            />

            <div className=" col-start-7 col-end-11  row-start-3 row-end-11 bg-[#1e6961] rounded-[20px] shadow-whiteShadow   border-white border-[2px] z-10"></div>
        </div>
    );
};
export default Item1PC;
