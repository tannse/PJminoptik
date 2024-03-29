import LocationPost4Img1 from "../../../assets/LocationPost4Img1.webp";
import LocationPost4Img2 from "../../../assets/LocationPost4Img2.webp";
import LocationPost4Img3 from "../../../assets/LocationPost4Img3.webp";
import { motion } from "framer-motion";
import {
    ShowLeftDelayAnimate,
    ShowDownAnimate,
} from "../../../Card UI/Animation";
const OptikLocationPost4 = (props) => {
    const {
        TitleItem4,
        DescItem4,
        TitleItem5,
        DescItem5,
        TitleItem6,
        DescItem6,
    } = props;
    return (
        <>
            <div className="mt-[50px] ">
                <div className="h-[100vh] dt:h-[50vh] flex dt:flex-row flex-col justify-between gap-x-[50px]  ">
                    {/* Item1 Post4 */}
                    <motion.div
                        {...ShowLeftDelayAnimate(0.2)}
                        className=" flex-1 rounded-xl flex justify-center items-center text-center bg-[#F6FCF6]"
                    >
                        <div className="w-[80%]">
                            <h3 className="h3CustomPC text-custom-darkgreen">
                                {TitleItem4}
                            </h3>
                            <p>{DescItem4}</p>
                        </div>
                    </motion.div>
                    {/* Item2 Post4 */}
                    <motion.div
                        {...ShowLeftDelayAnimate(0.4)}
                        className=" flex-1 rounded-xl flex justify-center items-center text-center bg-[#F6FCF6]"
                    >
                        <div className="w-[80%]">
                            <h3 className="h3CustomPC text-custom-darkgreen ">
                                {TitleItem5}
                            </h3>
                            <p>{DescItem5}</p>
                        </div>
                    </motion.div>
                    {/* Item3 Post4 */}
                    <motion.div
                        {...ShowLeftDelayAnimate(0.6)}
                        className="flex-1 rounded-xl flex justify-center items-center text-center bg-[#F6FCF6]"
                    >
                        <div className="w-[80%]">
                            <h3 className="h3CustomPC text-custom-darkgreen">
                                {TitleItem6}
                            </h3>
                            <p>{DescItem6}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div {...ShowDownAnimate} className="mt-[50px] ">
                <div className=" dt:flex hidden justify-between gap-[2rem]   ">
                    <div className=" flex-1 rounded-xl flex justify-center items-center text-center bg-[#F6FCF6]">
                        <div className="w-[80%]">
                            <img
                                alt="Sunglass"
                                className="object-cover h-[65vh] w-full"
                                src={LocationPost4Img1}
                            />
                        </div>
                    </div>

                    <div className=" flex-1 rounded-xl flex justify-center items-center text-center bg-[#F6FCF6]">
                        <div className="w-[80%]">
                            <img
                                alt="Sunglass"
                                className="object-cover h-[65vh] w-full"
                                src={LocationPost4Img2}
                            />
                        </div>
                    </div>

                    <div className="flex-1 rounded-xl flex justify-center items-center text-center bg-[#F6FCF6]">
                        <div className="w-[80%]">
                            <img
                                alt="Sunglass"
                                className="object-cover h-[65vh] w-full"
                                src={LocationPost4Img3}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
export default OptikLocationPost4;
