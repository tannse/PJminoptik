import eyekid1 from "../../../assets/eyekid1.jpg";
import eyekid2 from "../../../assets/eyekid2.jpg";
import eyekid3 from "../../../assets/eyekid3.jpg";
import eyekid4 from "../../../assets/eyekid4.jpg";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowScale,
    ShowDownAnimate,
    ShowRightAnimate,
} from "../../../Card UI/Animation";
const GCListimg = () => {
    return (
        <>
            <div className="grid h-[60vh] dt:h-[100vh] grid-cols-12 grid-rows-12 gap-x-2 dt:gap-4 mt-[40px] dt:mt-0 bg-[#fbfbfb]">
                <motion.img
                    {...ShowLeftAnimate}
                    src={eyekid1}
                    alt="Eyekids"
                    className="  col-start-1 dt:col-start-2 col-end-7 row-start-1 dt:row-start-2 row-end-6 dt:row-end-7  shadow-Shadow  w-full h-full object-cover  "
                />
                <motion.img
                    {...ShowUpAnimate}
                    src={eyekid2}
                    alt="Eyekids"
                    className="col-start-7 col-end-13 dt:col-end-12 row-start-1 dt:row-start-2 row-end-6 dt:row-end-7 shadow-Shadow  w-full h-full  object-cover  "
                />
                <motion.img
                    {...ShowDownAnimate}
                    src={eyekid3}
                    alt="Eyekids"
                    className=" col-start-1 dt:col-start-2  col-end-7 dt:col-end-6 row-start-7 dt:row-start-7 row-end-12 dt:row-end-12 shadow-Shadow  w-full h-full  object-cover  "
                />
                <motion.img
                    {...ShowRightAnimate}
                    src={eyekid4}
                    alt="Eyekids"
                    className=" col-start-7 dt:col-start-6 col-end-13 dt:col-end-12 row-start-7 dt:row-start-7 row-end-12 dt:row-end-12 shadow-Shadow  w-full  h-full object-cover  "
                />
            </div>
        </>
    );
};
export default GCListimg;
