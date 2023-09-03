import CardOptik from "../../assets/CardOptik.png";
import { motion } from "framer-motion";
import { ShowRightAnimate, ShowRotate } from "../../Card UI/Animation";
import React from "react";
const OfferPost1 = (props) => {
    return (
        <div className="h-[55vh] flex justify-center mt-7">
            <div className="w-[calc(100%-240px)]  ">
                <div className="flex bg-premierColor items-center shadow-Shadow100 rounded-[20px]">
                    <motion.img
                        {...ShowRotate}
                        src={CardOptik}
                        alt="CardOptik"
                        className=" pointer-events-none  transition duration-600 ease-linear w-2/4 h-[50vh] object-none"
                    />
                    <motion.div {...ShowRightAnimate} className="w-2/4">
                        <h1 className="text-[3.4rem] font-Exo text-white  font-extrabold">
                            ERBJUDANDE KONTAKTLINSER
                        </h1>
                        <p
                            className="DescCustomPC text-white
                        "
                        >
                            Prova marknadens bästa linser hos din lokala optiker
                            i Vellinge – till samma pris som på internet!
                        </p>
                        <button className="StyleButtonNav capitalize">
                            {" "}
                            SE LEDIGA TIDER
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default OfferPost1;
