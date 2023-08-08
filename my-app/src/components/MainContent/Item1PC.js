import Item1Photo from "../assets/Item1Photo 1.png";
import ServiceCT1 from "../assets/ServiceCT1.png";
import { motion } from "framer-motion";
const Item1PC = () => {
    return (
        <div className="mbx:hidden mb:hidden dt:grid grid-cols-12 grid-rows-14      h-[100vh]  relative">
            <motion.h3
                className="text-[40px] col-start-2 col-end-7 row-start-3 font-bold font-Exo text-black"
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
                className="col-start-2 col-end-5 row-start-4  mt-4  border-[1px] border-black"
            />
            <p className="text-[25px]  text-black font-bold font-Exo line-clamp- col-start-2 col-end-6 row-start-5">
                Vi försöker hela tiden att förbättra och utbilda oss.
            </p>
            <p className="text-black text-[18px] col-start-2 col-end-6 row-start-7 ">
                Allt för att kunna hjälpa dig på bästa sätt. Välkommen att
                inspireras! Vi har den senaste tekniken för att visa Dig som
                kund skillnaden på olika glas och alla de kvalitéer som
                marknaden har att erbjuda. Kom in i butiken så visar vi mer med
                hjälp av bl.a. Zeiss.
            </p>
            <motion.button
                initial={{ scale: "80%" }}
                whileInView={{ scale: "100%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="StyleButtonNav col-start-2 row-start-10"
            >
                <a href="./">LÄS MER OCH HITTA TILL OSS</a>
            </motion.button>

            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="  col-start-7 col-end-10 row-start-2 row-end-8   object-cover z-20"
                src={Item1Photo}
                alt="Service Item"
            />
            <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className=" col-start-10 col-end-13  row-start-7   object-cover z-20"
                src={ServiceCT1}
                alt="Service Item"
            />

            <div className=" col-start-8 col-end-12  row-start-4 row-end-11 rounded-[20px]   border-green-700 border-[2px] z-10"></div>
        </div>
    );
};
export default Item1PC;
