import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowScale,
    ShowDownAnimate,
    ShowRightAnimate,
} from "../../../Card UI/Animation";
import TorraOgonImg2 from "../../../assets/TorraOgon2.jpg";
const TorraList2 = (props) => {
    const { title, desc, question } = props;
    return (
        <>
            <div className="font-Exo grid h-[130vh] dt:h-[90vh] grid-cols-12 grid-rows-12 gap-8 bg-[#e9e7e7] ">
                <motion.h2
                    {...ShowUpAnimate}
                    className="row-start-1 row-end-4 col-start-2 col-end-12 dt:col-end-7  dt:row-start-3 dt:row-end-4 text-[2rem] dt:text-[3rem] my-auto text-custom-darkgreen font-extrabold"
                >
                    {title}
                </motion.h2>
                <motion.img
                    {...ShowRightAnimate}
                    alt="Arbet Glas"
                    className="col-start-2 col-end-12 row-start-3 row-end-6 dt:col-start-7 dt:row-start-3 dt:row-end-10 rounded-lg my-auto w-[100%]  h-full object-cover "
                    src={TorraOgonImg2}
                />

                <p className="row-start-6 row-end-10 mbx: col-start-2 col-end-12 dt:col-end-7 dt:row-start-5 dt:row-end-9 my-auto dt:DescCustomPC">
                    {desc}
                </p>
                <motion.p
                    {...ShowLeftAnimate}
                    className="row-start-10 mbx:row-start-9 row-end-13 col-start-2 col-end-12 dt:col-end-7 dt:row-start-8 dt:row-end-10 my-auto dt:text-custom-darkgreen text-[2rem] "
                >
                    {question}
                </motion.p>
            </div>
        </>
    );
};
export default TorraList2;
