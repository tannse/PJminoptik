import Arbetglas5 from "../../../assets/Arbetglas5.jpg";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost4 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="font-Exo grid h-[60vh] grid-cols-12 grid-rows-7 bg   bg-[#fbfbfb]  ">
                <img
                    className=" animate-bounce rounded-[100%] shadow-Shadow  col-start-8 col-end-10 row-start-2
                     row-end-6 w-full h-full object-none "
                    src={Arbetglas5}
                />
                <h2 className="col-start-2 col-end-6 row-start-3 row-end-4 text-[40px] text-custom-darkgreen font-extrabold">
                    {title}
                </h2>
                <p className="col-start-2 col-end-7 row-start-4 row-end-6 text-custom-darkgreen text-[24px] font-bold DescCustomPC">
                    {desc}
                </p>
            </div>
        </>
    );
};
export default WorkGlassPost4;
