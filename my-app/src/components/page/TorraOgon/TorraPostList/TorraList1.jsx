import TorraOgonImg1 from "../../../assets/TorraOgon1.jpg";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowUpAnimate,
    ShowScale,
    ShowDownAnimate,
    ShowRightAnimate,
} from "../../../Card UI/Animation";
const TorraList1 = (props) => {
    const { title, desc } = props;
    console.log(props);
    return (
        <>
            <div className="font-Exo grid h-[100vh]  dt:h-[80vh] grid-cols-12 grid-rows-12 gap-8 bg-[#fbfbfb] ">
                <motion.h2
                    {...ShowRightAnimate}
                    className=" mb:row-start-1 mb:row-end-3 col-start-2 col-end-12 mbx:row-start-1 mbx:row-end-3 dt:col-start-7 dt:row-start-2 dt:row-end-4 text-[2rem] dt:text-[3rem] my-auto text-custom-darkgreen font-extrabold"
                >
                    {title}
                </motion.h2>
                <motion.img
                    {...ShowLeftAnimate}
                    alt="Arbet Glas"
                    className=" mb:row-start-3 mb:row-end-7 rounded-xl shadow-Shadow col-start-2 col-end-12 dt:col-end-7 row-start-1 dt:row-start-2 row-end-5 dt:row-end-12 w-[100%]  h-full object-cover "
                    src={TorraOgonImg1}
                />
                <p className="mb:row-start-7 mb:row-end-11 col-start-2 col-end-12 row-start-8 row-end-11 dt:col-start-7 dt:row-start-4 dt:row-end-9 dt:mt-0 dt:DescCustomPC">
                    {desc}
                </p>

                <Button
                    className="mb:row-start-10 mb:row-end-13 col-start-3 col-end-10 row-start-10 dt:col-start-7 dt:row-start-7 dt:row-end-8 my-auto translate-y-5 
                 StyleButtonNav"
                >
                    SE LEDIGA TIDER
                </Button>
            </div>
        </>
    );
};
export default TorraList1;
