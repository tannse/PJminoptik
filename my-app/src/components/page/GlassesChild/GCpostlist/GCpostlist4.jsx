import kidBigglasses from "../../../assets/kidBigglasses.jpg";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowScale,
    ShowDownAnimate,
    ShowRightAnimate,
    ShowRotate,
} from "../../../Card UI/Animation";
const GCpostlist4 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[130vh] grid-cols-12 grid-rows-12 bg-[#fbfbfb] ">
                <motion.h1
                    {...ShowScale}
                    className="col-start-2 col-end-12 dt:col-start-4 dt:col-end-10 row-start-1 row-end-3 mx-auto my-auto text-[2rem] dt:text-[3rem] font-bold text-custom-darkgreen"
                >
                    {title}
                </motion.h1>
                <hr className=" hidden dt:block h-[1px] row-start-2 dt:row-start-3 mt-[15%] dt:mt-[-10%] col-start-5 col-end-9  bg-premierColor font-extrabold  " />
                <img
                    src={kidBigglasses}
                    alt="KidBigGlass"
                    className="col-start-2 col-end-12 row-start-3 row-end-6 dt:row-end-8 dt:rounded-[30%] shadow-Shadow w-full h-full object-cover  "
                />
                <figcaption className="col-start-5 col-end-11 dt:col-start-12 dt:col-end-13 m-auto row-start-6 row-end-7 dt:row-start-6 dt:row-end-8 italic dt:rotate-90 mt-[10px] dt:mt-[-15px]  text-custom-darkgreen  ">
                    Picture (dribble)
                </figcaption>
                <p className="col-start-2 col-end-12 row-start-6 row-end-10 my-auto dt:row-start-9 text-custom-darkgreen DescCustomPC">
                    <span className="text-custom-darkgreen font-semibold">
                        {desc?.first.charAt(0)}
                    </span>
                    {desc?.first.substring(1)}
                </p>
                <p className="col-start-2 col-end-12 row-start-9 dt:row-start-10 row-end-11 mt-[15px] text-custom-darkgreen DescCustomPC">
                    <span className="text-custom-darkgreen font-semibold">
                        {desc?.second.charAt(0)}
                    </span>
                    {desc?.second.substring(1)}
                </p>
            </div>
        </>
    );
};
export default GCpostlist4;
