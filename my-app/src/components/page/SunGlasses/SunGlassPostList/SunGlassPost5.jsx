import ImgPost5 from "../../../assets/ImgPost5.jpg";
import ImgPost6 from "../../../assets/ImgPost6.png";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowLeftDelayAnimate,
} from "../../../Card UI/Animation";
const SunGlassPost5 = (props) => {
    const {
        titleFirst,
        titleSecond,
        descFirst,
        descSecond,
        descThird,
        descFour,
        descFive,
    } = props;
    return (
        <>
            <div className="font-Exo grid h-[140vh] dt:h-[140vh] grid-cols-12 grid-rows-12 gap-x-[20px] gap-y-[20px] bg-[#d9f8e8] ">
                <motion.h3
                    {...ShowUpAnimate}
                    className=" mb:row-start-1 mb:row-end-3 mb:col-start-2 mb:col-end-12 col-end-13 dt:col-start-4 dt:col-end-10 dt:row-start-1 dt:row-end-3 text-[27px] dt:text-[3rem] dt:text-center  m-auto text-custom-darkgreen font-extrabold"
                >
                    {titleFirst}
                </motion.h3>
                <motion.p
                    {...ShowLeftDelayAnimate(0.2)}
                    className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-start-8 row-end-11 dt:col-start-2 dt:col-end-5 dt:row-start-2 dt:row-end-5 text-center m-auto text-custom-darkgreen dt:DescCustomPC"
                >
                    {descFirst}
                </motion.p>
                <motion.p
                    {...ShowLeftDelayAnimate(0.4)}
                    className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-start-8 row-end-11 dt:col-start-5 dt:col-end-9 dt:row-start-2 dt:row-end-5 text-center m-auto text-custom-darkgreen dt:DescCustomPC"
                >
                    {descSecond}
                </motion.p>
                <motion.p
                    {...ShowLeftDelayAnimate(0.6)}
                    className="mb:row-start-7 mb:row-end-10 mb:col-start-2  mb:col-end-12 row-start-8 row-end-11 dt:col-start-9 dt:col-end-12 dt:row-start-2 dt:row-end-5 text-center m-auto  text-custom-darkgreen dt:DescCustomPC"
                >
                    {descThird}
                </motion.p>
                <motion.p
                    {...ShowLeftDelayAnimate(0.8)}
                    className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-start-8 row-end-11 dt:col-start-2 dt:col-end-12 dt:row-start-4 dt:row-end-6 text-center m-auto text-custom-darkgreen text-[24px] font-bold"
                >
                    {descFour}
                </motion.p>
                <motion.img
                    {...ShowLeftAnimate}
                    className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-start-8 row-end-11 dt:col-start-2 dt:col-end-12 dt:row-start-6 dt:row-end-8 m-auto rounded-2xl  object-contain "
                    src={ImgPost5}
                ></motion.img>
            </div>
            <div className="font-Exo grid h-[120vh]  dt:h-[80vh] grid-cols-12 grid-rows-12 bg-[#f9fffc]">
                <h3 className=" mb:row-start-1 mb:row-end-3 mb:col-start-2 mb:col-end-12 col-end-13 dt:col-start-2 dt:col-end-7 dt:row-start-2 dt:row-end-3 text-[27px] dt:text-[3rem] dt:text-center m-auto text-custom-darkgreen font-extrabold">
                    {titleSecond}
                </h3>
                <p className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-start-8 row-end-11 dt:col-start-2 dt:col-end-7 dt:row-start-5 dt:row-end-12 text-center leading-7  text-custom-darkgreen dt:DescCustomPC">
                    <span className="text-[1.5rem] font-semibold">
                        {descFive.charAt(0)}
                    </span>
                    {descFive.substring(1)}
                </p>
                <img
                    alt="Arbet Glas"
                    className=" mb:row-start-3 mb:row-end-7 rounded-xl shadow-whiteShadow50 col-end-12 dt:col-start-8 dt:col-end-12 row-start-1 dt:row-start-2 row-end-5 dt:row-end-11 w-[100%] h-full object-cover "
                    src={ImgPost6}
                />
            </div>
        </>
    );
};
export default SunGlassPost5;
