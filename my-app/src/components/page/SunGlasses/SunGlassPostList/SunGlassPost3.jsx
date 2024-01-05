import SunGlass3 from "../../../assets/Sunglass3.webp";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowDownAnimate,
    ShowSpecialAnimate90,
} from "../../../Card UI/Animation";
const SunGlassPost3 = (props) => {
    const { descFirst, descSecond, descThird, titleFirst, titleSecond } = props;
    return (
        <>
            <div className="font-Exo grid h-[120vh]  dt:h-[100vh] grid-cols-12 grid-rows-12 bg-[#f6faf6]">
                <motion.h3
                    {...ShowDownAnimate}
                    className=" mb:row-start-1 mb:row-end-3 mb:col-start-2 mb:col-end-12 col-end-13 dt:col-start-7 dt:col-end-12 dt:row-start-1 dt:row-end-3 text-[27px] dt:text-[3rem] dt:text-center m-auto text-custom-darkgreen font-extrabold"
                >
                    {titleFirst}
                </motion.h3>
                <p className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-start-8 row-end-11 dt:col-start-7 dt:col-end-12 dt:row-start-2 dt:row-end-6 text-center m-auto text-custom-darkgreen dt:DescCustomPC">
                    <span className="text-[1.5rem] font-semibold">
                        {descFirst.charAt(0)}
                    </span>
                    {descFirst.substring(1)}
                </p>
                <motion.h3
                    {...ShowLeftAnimate}
                    className=" mb:row-start-1 mb:row-end-4 mb:col-start-2 mb:col-end-12 dt:col-start-7 dt:col-end-12 dt:row-start-5 dt:row-end-9 text-[27px] dt:text-[3rem] dt:text-center m-auto text-custom-darkgreen font-extrabold"
                >
                    {titleSecond}
                </motion.h3>
                <p className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-end-11 dt:col-start-7 dt:col-end-12 dt:row-start-8 dt:row-end-10 text-center m-auto text-custom-darkgreen dt:DescCustomPC">
                    <span className="text-[1.5rem] font-semibold">
                        {descSecond.charAt(0)}
                    </span>
                    {descSecond.substring(1)}
                </p>
                <p className="mb:row-start-7 mb:row-end-10 mb:col-start-2 mb:col-end-12 row-end-11 dt:col-start-7 dt:col-end-12 dt:row-start-10 dt:row-end-13 dt:mt-0 text-center m-auto text-custom-darkgreen dt:DescCustomPC">
                    <span className="text-[1.5rem] font-semibold">
                        {descThird.charAt(0)}
                    </span>
                    {descThird.substring(1)}
                </p>
                <motion.img
                    {...ShowSpecialAnimate90}
                    alt="Arbet Glas"
                    className=" mb:row-start-3 mb:row-end-7 rounded-xl shadow-whiteShadow50 col-start-2 col-end-12 dt:col-end-6 row-start-1 dt:row-start-2 row-end-5 dt:row-end-12 w-[100%] h-full object-cover "
                    src={SunGlass3}
                />
            </div>
        </>
    );
};
export default SunGlassPost3;
