import lottaImg from "../../assets/lotta-optik.png";
import { motion } from "framer-motion";
import { ShowRightAnimate } from "../../Card UI/Animation";
import { ShowLeftAnimate } from "../../Card UI/Animation";
import { ShowUpAnimate } from "../../Card UI/Animation";
const VisionPost1 = () => {
    return (
        <div className="h-[85vh] flex justify-center mt-7">
            <div className="w-[calc(100%-240px)]  ">
                <div className="flex gap-x-[9rem] items-center  h-[75vh] ">
                    <div className="w-2/5 flex flex-col gap-y-5 ">
                        <motion.h2
                            {...ShowRightAnimate}
                            className=" text-[2.5rem]  text-custom-darkgreen font-Exo text-  font-extrabold"
                        >
                            TÄNK PÅ DIN HÄLSA!
                        </motion.h2>
                        <h3
                            className=" h3CustomPC font-semibold text-custom-darkgreen
                "
                        >
                            Prova marknadens bästa linser hos din lokala optiker
                            i Vellinge – till samma pris som på internet!
                        </h3>
                        <p className="DescCustomPC text-custom-darkgreen">
                            Det är alltid en bra idé att undersöka synen om du
                            märker att du börja se sämre. Har du ex. svårt att
                            se vad det står på skyltar på långt håll, om du får
                            huvudvärk ofta eller om du måste kisa för att kunna
                            läsa vad det står i mobilen.
                        </p>
                        <p className="DescCustomPC text-custom-darkgreen">
                            Det är alltid en bra idé att undersöka synen om du
                            märker att du börja se sämre. Har du ex. svårt att
                            se vad det står på skyltar på långt håll, om du får
                            huvudvärk ofta eller om du måste kisa för att kunna
                            läsa vad det står i mobilen.
                        </p>
                        <motion.button
                            {...ShowUpAnimate}
                            className="StyleButtonNav w-1/3 capitalize"
                        >
                            {" "}
                            SE LEDIGA TIDER
                        </motion.button>
                    </div>
                    <motion.img
                        {...ShowLeftAnimate}
                        src={lottaImg}
                        alt="lottaImg"
                        className=" w-[40%] rounded-tl-[200px] rounded-br-[200px] h-[70vh] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
export default VisionPost1;
