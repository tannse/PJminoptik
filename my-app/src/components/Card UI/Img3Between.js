import { motion } from "framer-motion";
import ServiceCT3 from "../../assets/ServiceCT3.jpg";
const Img3Between = () => {
    return (
        <div className="flex justify-center relative">
            <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                src={ServiceCT3}
                className=" ImgCusTomMobile"
            />
        </div>
    );
};
export default Img3Between;
