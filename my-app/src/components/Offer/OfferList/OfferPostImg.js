import { motion } from "framer-motion";
import OfferImage1 from "../../assets/OfferImage1.jpg";
import OfferImage2 from "../../assets/OfferImage2.jpg";
import OfferImage3 from "../../assets/OfferImage3.jpg";
import {
    ShowDownAnimate,
    ShowLeftAnimate,
    ShowRightAnimate,
} from "../../Card UI/Animation";

const OfferPostImg = () => {
    return (
        <div className="h-[60vh] flex justify-center">
            <div className="w-[calc(100%-240px)] flex gap-x-[50px] justify-between  ">
                <motion.img
                    {...ShowLeftAnimate}
                    alt="OfferImage"
                    src={OfferImage1}
                    className=" shadow-Shadow100 h-[40vh] w-2/6 rounded-[30px] mt-[130px]"
                ></motion.img>
                <motion.img
                    {...ShowDownAnimate}
                    alt="OfferImage"
                    src={OfferImage2}
                    className=" shadow-Shadow100 h-[40vh] w-2/6 rounded-[30px]"
                ></motion.img>
                <motion.img
                    {...ShowRightAnimate}
                    alt="OfferImage"
                    src={OfferImage3}
                    className=" shadow-Shadow100 h-[40vh]  w-2/6 rounded-[30px] mt-[-130px]"
                ></motion.img>
            </div>
        </div>
    );
};
export default OfferPostImg;
