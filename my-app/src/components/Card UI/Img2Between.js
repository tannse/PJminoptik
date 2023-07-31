import { motion } from "framer-motion";
import ServiceCT2 from "../assets/ServiceCT2.jpg";
const Img2Between = () => {
    return (
        <div className="flex justify-center relative">
            <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                src={ServiceCT2}
                className=" ImgCusTomMobile"
            />
        </div>
    );
};
export default Img2Between;
