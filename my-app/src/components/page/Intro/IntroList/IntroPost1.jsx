import AboutPhoto from "../../../assets/MinOptikAbout.jpg";
import { motion } from "framer-motion";
import { ShowUpAnimate } from "../../../Card UI/Animation";
import { ShowRightAnimate } from "../../../Card UI/Animation";
import { ShowLeftAnimate } from "../../../Card UI/Animation";

const IntroPost1 = (props) => {
    const { title, desc } = props;

    return (
        <div className=" bg-premierColor dt:bg-[#fff] flex flex-col items-center h-fit dt:h-[80vh] ">
            <motion.h1
                {...ShowUpAnimate}
                className=" text-center font-bold font-Exo text-[#fff] dt:text-[#00564B] py-[28px] text-[3rem]"
            >
                {title}
            </motion.h1>
            <div className=" w-[calc(100%-20%)]  flex justify-center h-[80vh] dt:h-[50vh] dt:rounded-full dt:bg-premierColor  ">
                <div className=" flex flex-col   items-center dt:justify-center dt:flex-row dt:w-[calc(100%-7em)]">
                    <motion.div
                        className=" ml-[5%] flex  flex-col dt:self-center "
                        {...ShowLeftAnimate}
                    >
                        <p className="  dt:line-clamp-3 text-white dt:text-left DescCustom  dt:w-4/5">
                            {desc.first}
                        </p>
                        <p className="  dt:line-clamp-6  dt:mt-[20px] dt:text-left DescCustom text-white dt:w-4/5">
                            {desc.second}
                        </p>
                        <button className="StyleButtonNav  capitalize">
                            SE LEDIGA TIDER
                        </button>
                    </motion.div>

                    <motion.img
                        {...ShowRightAnimate}
                        className="   shadow-whiteShadow object-cover h-[30vh] dt:w-2/5  dt:h-[40vh] dt:rounded-full mt-[2rem]  "
                        alt="Vad Gora En Optik"
                        src={AboutPhoto}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroPost1;
