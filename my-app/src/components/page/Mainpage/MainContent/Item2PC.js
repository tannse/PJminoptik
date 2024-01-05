import { Button } from "@material-tailwind/react";
import ServiceCT2 from "../../../assets/ServiceCT2.webp";
import { ShowUpAnimate, ShowLeftAnimate } from "../../../Card UI/Animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Item2PC = () => {
    return (
        <div
            className="mbx:hidden mb:hidden  dt:grid grid-cols-12 grid-rows-14 overflow-hidden
        
        my-[32px] px-[71px] h-[100vh]  "
        >
            <motion.h3
                className="text-[40px] col-start-7 col-end-13 row-start-4 font-bold font-Exo text-custom-darkgreen"
                {...ShowLeftAnimate}
            >
                Bästa servicen
            </motion.h3>
            <motion.hr
                {...ShowLeftAnimate}
                className="col-start-7 col-end-10 row-start-5   border-[1px] border-black"
            />
            <p className="text-[25px] mt-[1em] text-custom-darkgreen font-bold font-Exo col-start-7 col-end-12 row-start-5 row-end-8 line-clamp-3">
                Min Optik är en del av Synologen – somär bäst påbemötande,
                engagemangoch branschkunskap i Sverige.
            </p>
            <motion.p
                {...ShowLeftAnimate}
                className="text-black text-[1.2rem] col-start-7 col-end-11 line-clamp-3 row-start-8 row-end-12 "
            >
                Det visar en färsk undersökning om kundservice, gjord bland 95
                utvalda butikskedjor i 15 olika branscher. Personlig service är
                framgångsreceptet!
            </motion.p>
            <Link
                {...ShowUpAnimate}
                to="synvard"
                className="StyleButtonNav group col-start-7 row-start-11"
            >
                <Button>Synundersökning</Button>
            </Link>

            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="  shadow-Shadow100 col-start-2 col-end-7 rounded-[999px] h-[90vh] row-start-2 row-end-11 object-cover z-20"
                src={ServiceCT2}
                alt="Service Item"
            />
        </div>
    );
};
export default Item2PC;
