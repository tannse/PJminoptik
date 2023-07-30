import { motion } from "framer-motion";
const ServiceOptik = () => {
    return (
        <div className="h-[100vh] bg-[#fff]">
            <div>
                <div className="mt-[20rem]   px-[2.4rem] StyleFlexCol">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-[1.5rem] font-bold font-Exo text-black 
                     
                    "
                    >
                        Bästa servicen
                    </motion.h2>
                    <hr className="w-[50%] mt-[5px] font-bold" />
                    <span className="pt-[0.6rem] font-Exo font-bold text-[18px] text-black StyleTitle text-center">
                        Min Optik är en del av Synologen somär bäst påbemötande,
                        engagemangoch branschkunskap i Sverige.
                    </span>
                    <p className="pt-[0.6rem] text-[16px] font-medium text-black text-center">
                        Allt för att kunna hjälpa dig på bästa sätt. Välkommen
                        att inspireras! Vi har den senaste tekniken för att visa
                        Dig somkund skillnaden på olika glas och alla de
                        kvalitéer som marknaden har att erbjuda. Kom in i
                        butiken så visar vi mer med hjälp av bl.a. Zeiss.
                    </p>
                    <button className="  dt:block mt-[15px] outline-none  active:scale-75 transition-transform duration-50 font-Exo font-bold  rounded-[10px] shadow-Shadow px-[15px] border-white border-[2px] border-solid text-white  bg-bgButton   h-[43px]">
                        LÄS MER OCH HITTA TILL OSS
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ServiceOptik;
