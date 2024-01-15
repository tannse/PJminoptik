import { motion } from "framer-motion";
import {
    ShowUpAnimate,
    ShowSpecialAnimate90,
} from "../../../Card UI/Animation";
import LocationPost5Img from "../../../assets/LocationPost5Img.webp";
const OptikLocation5 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="my-[40px] h-[80vh] dt:h-[70vh] flex justify-center items-center bg-[#F7FDF7]">
                <div className="w-[90%] ">
                    <div className="flex dt:flex-row flex-col items-center gap-x-5 w-[100%]">
                        <motion.div {...ShowUpAnimate} className="flex-1">
                            <h3 className="text-[30px] text-center text-custom-darkgreen">
                                {title}
                            </h3>
                            <p className="text-center leading-[30px] mt-[36px] DescCustomPC">
                                {desc}
                            </p>
                        </motion.div>
                        <div className="flex-1">
                            <motion.img
                                {...ShowSpecialAnimate90}
                                className="h-[30vh] w-full rounded-lg object-contain"
                                alt="Team"
                                src={LocationPost5Img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OptikLocation5;
