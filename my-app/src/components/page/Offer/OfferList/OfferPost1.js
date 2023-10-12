import CardOptik from "../../../assets/CardOptik.png";
import { motion } from "framer-motion";
import { ShowRightAnimate, ShowRotate } from "../../../Card UI/Animation";
import { Button } from "@material-tailwind/react";
import React from "react";
const OfferPost1 = (props) => {
    return (
        <div className="flex justify-center  mt-[6.3rem] dt:mt-[2rem]">
            <div className="w-[calc(100%-20%)]">
                <div className="flex flex-col items-center rounded-xl justify-center bg-premierColor h-[70vh]  dt:h-[60vh]  dt:flex-row  shadow-Shadow ">
                    <motion.img
                        {...ShowRotate}
                        src={CardOptik}
                        alt="CardOptik"
                        className=" pointer-events-none h-[20vh]  transition duration-600 ease-linear object-cover dt:w-2/4 dt:h-[50vh] dt:object-none"
                    />
                    <motion.div
                        {...ShowRightAnimate}
                        className="flex flex-col gap-y-6 items-center dt:w-2/4"
                    >
                        <h1 className="h2CustomMobile font-Exo text-white  font-extrabold">
                            ERBJUDANDE KONTAKTLINSER
                        </h1>
                        <p
                            className="DescCustomMobile text-center text-white
                        "
                        >
                            Prova marknadens bästa linser hos din lokala optiker
                            i Vellinge – till samma pris som på internet!
                        </p>
                        <hr className=" bg-[#fff] w-[50%]" />
                        <Button className="StyleButtonNav w-[30px] capitalize">
                            SE LEDIGA TIDER
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default OfferPost1;
