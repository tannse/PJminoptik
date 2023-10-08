import lottaImg from "../../../assets/lotta-optik.png";
import { motion } from "framer-motion";
import { ShowRightAnimate } from "../../../Card UI/Animation";
import { ShowLeftAnimate } from "../../../Card UI/Animation";
import { ShowUpAnimate } from "../../../Card UI/Animation";
const VisionPost1 = () => {
    return (
        <div className="h-fit dt:h-[85vh] relative flex flex-col items-center justify-center mb-[50px] ">
            <div className="w-[calc(100%-10%)]">
                <div className="flex  dt:gap-x-[9rem]   dt:h-[75vh] ">
                    <div className=" flex flex-col   dt:w-2/5 dt:gap-y-5 ">
                        <div className="mt-[20px] flex flex-col gap-4">
                            <motion.h2
                                {...ShowRightAnimate}
                                className=" text-[2.5rem]    text-custom-darkgreen font-Exo   font-extrabold"
                            >
                                TÄNK PÅ DIN HÄLSA!
                            </motion.h2>

                            <h3
                                className=" h3CustomPC font-semibold  text-custom-darkgreen
                "
                            >
                                Prova marknadens bästa linser hos din lokala
                                optiker i Vellinge – till samma pris som på
                                internet!
                            </h3>
                            <p className="DescCustomPC text-custom-darkgreen">
                                Det är alltid en bra idé att undersöka synen om
                                du märker att du börja se sämre. Har du ex.
                                svårt att se vad det står på skyltar på långt
                                håll, om du får huvudvärk ofta eller om du måste
                                kisa för att kunna läsa vad det står i mobilen.
                            </p>

                            <motion.button
                                {...ShowUpAnimate}
                                className="StyleButtonNav w-[40%] capitalize"
                            >
                                {" "}
                                SE LEDIGA TIDER
                            </motion.button>
                            <motion.img
                                {...ShowLeftAnimate}
                                src={lottaImg}
                                alt="lottaImg"
                                className=" h-[45vh]  shadow-Shadow  w-full  block dt:w-[40%] rounded-[10%] dt:h-[70vh] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VisionPost1;
