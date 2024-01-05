import Carousel from "../../../Card UI/Carousel";
import SunGlass1 from "../../../assets/SunglassSlide1.webp";
import SunGlass2 from "../../../assets/SunglassSlide2.webp";
import SunGlass3 from "../../../assets/SunglassSlide3.webp";
import SunGlass4 from "../../../assets/SunglassSlide4.webp";
import DOlogo from "../../../assets/DOlogo.webp";
import RBlogo from "../../../assets/RBlogo.webp";
import OAlogo from "../../../assets/OAlogo.webp";
import { motion } from "framer-motion";
import { ShowScale, ShowLeftDelayAnimate } from "../../../Card UI/Animation";
const SunGlassPost4 = (props) => {
    const images = [SunGlass1, SunGlass2, SunGlass3, SunGlass4];

    const { title } = props;
    return (
        <>
            <div className="  h-[100vh] dt:h-[120vh] flex items-center flex-col font-Exo  bg-[#f6faf6]">
                <div className="max-w-full dt:max-w-4xl">
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
                    </Carousel>
                </div>

                <div className="flex mt-[2rem] justify-evenly">
                    <div className="  w-[18%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.2)}
                            className=" place-content-stretch h-full    "
                            src={DOlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className=" w-[15%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.4)}
                            className=" h-full rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className=" w-[15%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.6)}
                            className=" h-full rounded-[10px] p-[10px] "
                            src={OAlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className="m w-[15%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(0.8)}
                            className=" h-full rounded-[10px] p-[10px] "
                            src={RBlogo}
                            alt="Rayban"
                        />
                    </div>
                    <div className="w-[15%]">
                        <motion.img
                            {...ShowLeftDelayAnimate(1)}
                            className="  h-full rounded-[10px] p-[10px]  "
                            src={OAlogo}
                            alt="Rayban"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default SunGlassPost4;
