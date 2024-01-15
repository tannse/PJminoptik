import OptikLocationImg1 from "../../../assets/OptikLocationImg1.png";
import { motion } from "framer-motion";
import { ShowUpAnimate } from "../../../Card UI/Animation";
const OptikLocationPost1 = (props) => {
    const { title, desc } = props;
    return (
        <div
            {...ShowUpAnimate}
            className="flex justify-center items-center relative bg-img  w-[100%]"
        >
            <motion.div {...ShowUpAnimate} className="absolute w-[90%]">
                <h3 className="text-[3rem] text-[#fff] ">{title}</h3>
                <p className="DescCustomPC italic text-[1.3rem] mt-[20px] text-[#fff]">
                    {desc}
                </p>
            </motion.div>
            <img
                className="w-[100%] object-cover h-[80vh]"
                alt="Kontakt MinOptik"
                src={OptikLocationImg1}
            />
        </div>
    );
};
export default OptikLocationPost1;
