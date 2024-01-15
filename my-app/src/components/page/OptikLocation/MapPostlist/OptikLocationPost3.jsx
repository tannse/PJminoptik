import { motion } from "framer-motion";
import { ShowLeftAnimate } from "../../../Card UI/Animation";
const OptikLocationPost3 = (props) => {
    const {
        FirstTitle,
        SecondTitle,
        FirstDesc,
        SecondDesc,
        ThirdDesc,
        TitleItem2,
        DescItem2,
        TitleItem3,
        DescItem3,
    } = props;
    return (
        <>
            <div className="flex flex-col  items-center ">
                <div className="w-[90%] ">
                    {/* FirstItem Post3 */}
                    <div className="h-[100vh] dt:h-[60vh] flex justify-center items-center bg-[#F6FCF6]">
                        <div className="flex-col items-center w-[80%]">
                            <motion.h3
                                {...ShowLeftAnimate}
                                className="h3CustomPC text-custom-darkgreen text-center"
                            >
                                {FirstTitle}
                            </motion.h3>
                            <p className="DescCustomPC  font-semibold text-custom-darkgreen text-center">
                                {SecondTitle}
                            </p>
                            <p className="DescCustomPC py-5 text-center">
                                {FirstDesc}
                            </p>
                            <p className="DescCustomPC py-5 text-center">
                                {SecondDesc}
                            </p>
                            <p className="DescCustomPC py-5 text-center">
                                {ThirdDesc}
                            </p>
                        </div>
                    </div>
                    {/* Second Post3 */}
                    <div className="h-[50vh] flex justify-center items-center bg-[#F6FCF6]">
                        <div className="flex-col items-center w-[80%]">
                            <motion.h3
                                {...ShowLeftAnimate}
                                className="h3CustomPC text-custom-darkgreen text-center"
                            >
                                {TitleItem2}
                            </motion.h3>

                            <p className="DescCustomPC py-5 leading-10  text-center">
                                {DescItem2}
                            </p>
                        </div>
                    </div>
                    {/* Third Post3 */}
                    <div className="h-[110vh]  dt:h-[50vh] mt-[35px]  flex justify-center items-center  bg-[#F6FCF6]">
                        <div className="flex-col items-center w-[80%] ">
                            <motion.h3
                                {...ShowLeftAnimate}
                                className="h3CustomPC text-custom-darkgreen text-center"
                            >
                                {TitleItem3}
                            </motion.h3>

                            <p className="DescCustomPC  leading-10 py-5 text-center">
                                {DescItem3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OptikLocationPost3;
