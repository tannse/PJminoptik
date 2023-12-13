import ServiceCT5 from "../../../assets/ServiceCT5.jpg";
import {
    ShowRightAnimate,
    ShowLeftAnimate,
    ShowScale,
} from "../../../Card UI/Animation";
import { motion } from "framer-motion";
const Item4PC = () => {
    return (
        <div className="mbx:hidden mb:hidden dt:grid grid-cols-12 grid-rows-14   h-[80vh]  ">
            <motion.h3
                className="text-[40px] col-start-7 col-end-13 row-start-3 font-bold font-Exo text-custom-darkgreen"
                {...ShowLeftAnimate}
            >
                Ögonläkare nära dig
            </motion.h3>
            <motion.hr
                {...ShowLeftAnimate}
                className="col-start-7 col-end-10 row-start-4 mt-4 my-[20px] border-black"
            />
            <p
                {...ShowLeftAnimate}
                className="text-[25px] mt-[1em] text-custom-darkgreen font-bold font-Exo  col-start-7 col-end-12 row-start-4 row-end-8 line-clamp-3"
            >
                Min Optik erbjuder undersökning av legitimerad ögonläkare..
            </p>
            <p
                {...ShowLeftAnimate}
                className="text-custom-darkgreen text-[20px] col-start-7 col-end-12 font-Exo line-clamp-3 row-start-7 row-end-11 "
            >
                Hos oss får du bra service – Ögonläkare nära dig. Med jämna
                mellanrum kan du boka tid hos en ögonläkare i vår butik. Se alla
                lediga tider nedan!
            </p>
            <motion.button
                {...ShowScale}
                className="StyleButtonNav group col-start-7 row-start-10"
            >
                <a href="./">Se lediga tider</a>
            </motion.button>

            <motion.img
                {...ShowRightAnimate}
                className=" h-[50vh]  col-start-2 col-end-6 row-start-3 shadow-Shadow100  object-cover rounded-[5em] row-end-11 bg-premierColor  z-20"
                src={ServiceCT5}
                alt="Service Item"
            />
        </div>
    );
};
export default Item4PC;
