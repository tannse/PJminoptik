import Arbetglas3 from "../../../assets/Arbetglas3.webp";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowScale,
} from "../../../Card UI/Animation";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost1 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="font-Exo grid  h-[120vh] mbx:h-[100vh]  dt:h-[80vh]  grid-cols-12 grid-rows-12 gap-8 bg-[#fbfbfb] ">
                <motion.img
                    {...ShowLeftAnimate}
                    alt="Arbet Glas"
                    className=" rounded-xl shadow-Shadow col-start-2 col-end-12 dt:col-end-7 row-start-1 dt:row-start-2 row-end-5 dt:row-end-12 w-[100%]  h-full object-cover "
                    src={Arbetglas3}
                />

                <motion.h2
                    {...ShowUpAnimate}
                    className="col-start-2 col-end-12 row-start-5 row-end-6 dt:col-start-8 dt:row-start-2 dt:row-end-4 text-[2rem] dt:text-[2.5rem] text-custom-darkgreen font-extrabold"
                >
                    {title}
                </motion.h2>
                <p className="col-start-2 col-end-12 row-start-7 row-end-8 dt:col-start-8 dt:row-start-4 dt:row-end-7 mbx:mt-[20px] my-auto DescCustomPC">
                    {desc.first}
                </p>
                <p className="col-start-2 dt:col-start-8 col-end-12  dt:row-start-6 dt:row-end-9  row-end-10 dt:mt-[20px] dt:DescCustomPC my-auto">
                    {desc.second}
                </p>

                <Button
                    {...ShowScale}
                    className="col-start-3 row-start-11 mbx:row-start-11 mbx:row-end-13 dt:row-start-9 dt:row-end-10  dt:col-start-8 col-end-10 m-auto
                 StyleButtonNav"
                >
                    SE LEDIGA TIDER
                </Button>
            </div>
        </>
    );
};
export default WorkGlassPost1;
