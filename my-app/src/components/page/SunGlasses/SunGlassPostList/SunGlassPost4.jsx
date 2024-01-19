import Carousel from "../../../Card UI/Carousel";
import SunGlass1 from "../../../assets/SunglassSlide1.webp";
import SunGlass2 from "../../../assets/SunglassSlide2.webp";
import SunGlass3 from "../../../assets/SunglassSlide3.webp";
import SunGlass4 from "../../../assets/SunglassSlide4.webp";
import DOlogo from "../../../assets/DOlogo.png";
import RBlogo from "../../../assets/RBlogo.png";

import { motion } from "framer-motion";
import {
    ShowScale,
    ShowLeftAnimate,
    ShowLeftDelayAnimate,
} from "../../../Card UI/Animation";
const SunGlassPost4 = (props) => {
    const images = [SunGlass1, SunGlass2, SunGlass3, SunGlass4];

    const { title } = props;
    return (
        <>
            <div className="  h-[50vh] dt:h-[120vh] flex items-center flex-col font-Exo  bg-[#f6faf6]">
                <div className="max-w-full block dt:max-w-4xl">
                    <motion.h3
                        {...ShowScale}
                        className=" self-center text-[27px] dt:text-[3rem] dt:text-center py-[20px] text-custom-darkgreen font-extrabold"
                    >
                        {title}
                    </motion.h3>
                    <Carousel>
                        {images.map((image, index) => (
                            <img alt="Sunglass" key={index} src={image} />
                        ))}
                        sg56 asf
                    </Carousel>
                </div>

                <ul className="flex dt:mt-[2rem] justify-center dt:justify-evenly">
                    <li className=" w-[20%]">
                        <img
                            className=" h-full object-contain rounded-[10px] p-[10px] "
                            src={DOlogo}
                            alt="hallo"
                        />
                    </li>
                    <li className=" w-[20%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.6)}
                            className=" h-full object-contain rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </li>
                    <li className=" w-[20%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.7)}
                            className=" h-full object-contain rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </li>
                    <li className="m w-[20%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.9)}
                            className=" h-full object-contain rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </li>
                    <li className="w-[20%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(1)}
                            className="  h-full object-contain rounded-[10px] p-[10px]  "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};
export default SunGlassPost4;
