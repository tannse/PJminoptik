import { motion } from "framer-motion";
import ServiceCT3 from "../assets/"
const Img3Between = () => {
    return (
        <div className="flex justify-center relative">
            <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                src={./}
                className=" ImgCusTomMobile"
            />
        </div>
    );
};
export default Img3Between;
