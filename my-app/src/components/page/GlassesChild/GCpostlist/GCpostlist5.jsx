import Iso9001 from "../../../assets/Arbetglas5.jpg";
import { BiLike } from "react-icons/bi";
const GCpostlist5 = (props) => {
    const { title, desc, tipsok } = props;

    return (
        <>
            <div className="font-Exo grid h-[130vh] dt:h-[80vh] grid-cols-12 grid-rows-12 border-b-[1px] border-solid border-white bg-premierColor">
                <h2 className="col-start-2 col-end-12 dt:col-end-8 row-start-2 dt:row-start-3 text-[2rem]  dt:text-[3rem]  font-bold   text-[#fff]">
                    {title}
                </h2>

                <img
                    src={Iso9001}
                    alt="Iso9001"
                    className=" col-start-9  col-end-12 row-start-3 row-end-7 my-auto dt:row-start-4 dt:row-end-6  dt:h-[18rem] rounded-xl object-contain  "
                />

                <p className="col-start-2 col-end-8 row-start-3 row-end-7 my-auto dt:row-start-5 text-[#fff] DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-8 row-start-7 dt:mt-[10px]  text-[#fff]   DescCustomPC">
                    {desc?.second}
                </p>
                <h3 className="col-start-2 col-end-8 row-start-9 text-[2rem]   font-bold  text-[#fff] capitalize">
                    {tipsok?.tip}
                </h3>
                <p className="col-start-2 col-end-8 row-start-10 mt-[10px]  text-[#fff]   DescCustomPC">
                    {tipsok?.desc}
                </p>
                <BiLike className="text-white animate-bounce text-[5rem] cold-start-8 col-end-10 dt:hidden row-start-10 row-end-13 my-auto"></BiLike>
            </div>
        </>
    );
};
export default GCpostlist5;
