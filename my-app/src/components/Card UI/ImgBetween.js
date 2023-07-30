import { motion } from "framer-motion";
import ServiceCT from "../assets/ServiceCT.jpg";
const ImgBetween = () => {
    return (
        <div className="flex justify-center relative">
            <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                src={ServiceCT}
                className=" absolute w-[80%] top-[-25vh] shadow-Shadow h-[50vh] rounded-[20px] text-center object-cover h-[60vh]"
            />
        </div>
    );
};
export default ImgBetween;
