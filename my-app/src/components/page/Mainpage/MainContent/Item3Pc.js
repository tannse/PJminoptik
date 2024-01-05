import ServiceCT3 from "../../../assets/ServiceCT3.webp";
import { ShowLeftAnimate, ShowScale } from "../../../Card UI/Animation";
import { motion } from "framer-motion";
const Item3PC = () => {
    return (
        <div className="mbx:hidden mb:hidden overflow-hidden dt:grid grid-cols-12 grid-rows-14  bg-premierColor h-[100vh]  relative">
            <motion.h3
                className="text-[40px] col-start-2 col-end-7 row-start-4 font-bold font-Exo text-white"
                {...ShowLeftAnimate}
            >
                Vi är här för dig
            </motion.h3>
            <motion.hr
                {...ShowLeftAnimate}
                className="col-start-2 col-end-5 row-start-5  mt-4  border-[1px] border-white"
            />
            <p className="text-[25px]  text-white font-bold font-Exo line-clamp- col-start-2 col-end-6 row-start-6">
                Vi tror på kompetens, valfrihet och omtanke.
            </p>
            <motion.p
                {...ShowLeftAnimate}
                className="text-white text-[1.2rem] col-start-2 col-end-6 row-start-8 "
            >
                Hit kan du komma när du behöver en noggrann synundersökning av
                vår optiker Charlotta, köpa kontaktlinser med personlig service
                över disk, eller bara vill ta en espresso och inspireras av det
                senaste glasögonmodet.
            </motion.p>
            <motion.button
                {...ShowScale}
                className="StyleButtonNav group shadow-whiteShadow50 col-start-2 row-start-12"
            >
                <a href="./">Boka tid online</a>
            </motion.button>

            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="  col-start-7 shadow-whiteShadow col-end-12 row-start-3 row-end-13 h-[80vh]  object-cover z-20"
                src={ServiceCT3}
                alt="Service Item"
            />
        </div>
    );
};
export default Item3PC;
