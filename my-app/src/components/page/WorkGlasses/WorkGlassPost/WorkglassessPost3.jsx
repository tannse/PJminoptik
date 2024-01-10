import Arbetglas4 from "../../../assets/Arbetglas4.webp";
import { motion } from "framer-motion";
import { ShowLeftAnimate, ShowRightAnimate } from "../../../Card UI/Animation";
export const WorkGlassPost3 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <>
                <div className="font-Exo grid dt:h-[80vh] mbx:h-[100vh] h-[150vh] grid-cols-12 grid-rows-12 ">
                    <motion.img
                        {...ShowLeftAnimate}
                        alt="arbet Glas"
                        className=" col-start-2 col-end-12 row-start-2 row-end-6 rounded-xl shadow-Shadow dt:col-start-2 dt:col-end-7 dt:row-start-2 dt:row-end-12 w-[100%] h-full object-cover "
                        src={Arbetglas4}
                    />

                    <motion.h2
                        {...ShowRightAnimate}
                        className="col-start-2 col-end-12 row-start-7 row-end-8 dt:col-start-8 dt:col-end-12 dt:row-start-3 dt:row-end-4 text-[2rem] dt:text-[3rem] text-custom-darkgreen font-extrabold"
                    >
                        {title}
                    </motion.h2>
                    <p className="col-start-2 col-end-12 row-start-8 row-end-9 mt-[40px] dt:col-start-8 dt:col-end-12 dt:row-start-5 dt:row-end-8 DescCustomPC ">
                        {desc.first}
                    </p>
                    <p className="col-start-2 col-end-12 row-start-11 row-end-12 dt:col-start-8 dt:col-end-12 dt:row-start-8 mt-[20px] font-semibold DescCustomPC ">
                        {desc.second}
                    </p>
                </div>
            </>
        </>
    );
};
export default WorkGlassPost3;
