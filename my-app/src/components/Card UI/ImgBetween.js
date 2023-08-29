import { motion } from "framer-motion";
import ServiceCT1 from "../../assets/ServiceCT1.png";
const Img1Between = () => {
    return (
        <div className="flex justify-center relative">
            <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                src={ServiceCT1}
                className=" ImgCusTomMobile"
            />
        </div>
    );
};
export default Img1Between;
