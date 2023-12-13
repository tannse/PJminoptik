import ChillEye1 from "../../../assets/ChildEye1.jpg";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowScale,
    ShowDownAnimate,
} from "../../../Card UI/Animation";
const GCpostlist1 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid dt:h-fit h-[130vh] grid-cols-12 grid-rows-12 ">
                <motion.h1
                    {...ShowLeftAnimate}
                    className="col-start-1 dt:col-start-4 col-end-12 row-start-1 row-end-2 dt:row-end-3 text-[2rem] dt:mt-auto dt:mb-auto  dt:text-[3rem] font-bold  ml-[30px] text-custom-darkgreen"
                >
                    {title}
                </motion.h1>
                <motion.img
                    {...ShowDownAnimate}
                    src={ChillEye1}
                    alt="ChildEye"
                    className="col-start-2 col-end-12 row-start-3 row-end-6 dt:row-end-9 dt:col-start-3 dt:col-end-11 dt:mt-0 dt:rounded-[20%] shadow-Shadow w-full h-full object-cover  "
                />
                <figcaption className="col-start-2 col-end-12 row-start-6 dt:row-start-9 italic dt:mt-[20px] text-custom-darkgreen text-center">
                    Photo(dribble)
                </figcaption>
                <p className="col-start-2 col-end-12 row-start-6 dt:row-start-10 mt-[30px] text-center dt:mt-0 text-custom-darkgreen DescCustomPC font-semibold">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-8 row-end-11 dt:row-start-11 text-center mt-[30px] dt:mt-0 text-custom-darkgreen font-semibold DescCustomPC">
                    {desc?.second}
                </p>
                <p className="col-start-2 col-end-12 row-start-11 row-end-12 pb-4 dt:row-start-12 text-center text-custom-darkgreen font-semibold DescCustomPC">
                    {desc?.third}
                </p>
            </div>
        </>
    );
};
export default GCpostlist1;
