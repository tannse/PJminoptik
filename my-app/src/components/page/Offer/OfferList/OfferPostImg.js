import { motion } from "framer-motion";
import OfferImage1 from "../../../assets/OfferImage1.jpg";
import OfferImage2 from "../../../assets/OfferImage2.jpg";
import OfferImage3 from "../../../assets/OfferImage3.jpg";
import {
    ShowDownAnimate,
    ShowLeftAnimate,
    ShowRightAnimate,
} from "../../../Card UI/Animation";

const OfferPostImg = () => {
    return (
        <div className="h-fit dt:h-[60vh] flex justify-center items-center dt:mt-[2rem] mt-[3rem]">
            <div className="w-[calc(100%-20%)] ">
                <div className="flex flex-col dt:flex-row gap-8 dt: dt:gap-x-[50px] dt:justify-between  ">
                    <motion.img
                        {...ShowLeftAnimate}
                        alt="OfferImage"
                        src={OfferImage1}
                        className=" dt:shadow-Shadow100 h-[40vh] object-cover dt:w-2/6 rounded-[30px] dt:"
                    ></motion.img>
                    <motion.img
                        {...ShowDownAnimate}
                        alt="OfferImage"
                        src={OfferImage2}
                        className=" dt:shadow-Shadow100 h-[40vh] object-cover dt:w-2/6 rounded-[30px]"
                    ></motion.img>
                    <motion.img
                        {...ShowRightAnimate}
                        alt="OfferImage"
                        src={OfferImage3}
                        className=" dt:shadow-Shadow100 h-[40vh] object-cover  dt:w-2/6 rounded-[30px] mb-[20px] dt:mb-0"
                    ></motion.img>
                </div>
            </div>
        </div>
    );
};
export default OfferPostImg;
