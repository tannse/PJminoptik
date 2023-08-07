import Item1Photo from "../assets/Item1Photo 1.png";
import ServiceCT1 from "../assets/ServiceCT1.png";
import { motion } from "framer-motion";
const Item1PC = () => {
    return (
        <div className="mbx:hidden mb:hidden dt:block bg-[#fff] py-[32px] px-[71px] h-[100vh]   relative">
            <div className="absolute   flex max-w-full  ">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className=" w-[40%] pt-[160px]"
                >
                    <h3 className="text-[40px] font-bold font-Exo text-black">
                        En ny generation optiker
                    </h3>
                    <motion.hr
                        initial={{ width: "5%" }}
                        whileInView={{ width: "20%" }}
                        transition={{ duration: 1 }}
                        className="w-3/5 mt-3 border-[1px] border-black"
                    />
                    <span className="text-[30px] text-black font-bold font-Exo mt-[4rem]">
                        Vi försöker hela tiden att förbättra och utbilda oss.
                    </span>
                    <p className="text-black text-[18px]">
                        Allt för att kunna hjälpa dig på bästa sätt. Välkommen
                        att inspireras! Vi har den senaste tekniken för att visa
                        Dig som kund skillnaden på olika glas och alla de
                        kvalitéer som marknaden har att erbjuda. Kom in i
                        butiken så visar vi mer med hjälp av bl.a. Zeiss.
                    </p>
                    <motion.button
                        initial={{ scale: "60%" }}
                        whileInView={{ scale: "100%" }}
                        transition={{ duration: 1 }}
                        className="StyleButtonNav"
                    >
                        <a href="./">LÄS MER OCH HITTA TILL OSS</a>
                    </motion.button>
                </motion.div>
                <div className="w-[55%] flex relative ">
                    <div className="flex justify-between h-[100vh]">
                        <motion.img
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute h-3/5 w-2/4 left-0 top-[5%] object-cover z-20"
                            src={Item1Photo}
                            alt="Service Item"
                        />
                        <motion.img
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute h-3/5 w-2/4 right-0 bottom-[10%] object-cover z-20"
                            src={ServiceCT1}
                            alt="Service Item"
                        />
                    </div>
                    <div className=" absolute left-[20%] self-center  w-[60%] h-3/5 border-green-700 border-[5px] z-10"></div>
                </div>
            </div>
        </div>
    );
};
export default Item1PC;
