import Arbetglas3 from "../../../assets/Arbetglas3.jpg";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost1 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="font-Exo grid h-[120vh]  dt:h-[80vh] grid-cols-12 grid-rows-12 gap-8 ">
                <img
                    alt="Arbet Glas"
                    className=" rounded-xl shadow-Shadow col-start-2 col-end-12 dt:col-end-7 row-start-1 row-end-5 dt:row-end-12 w-[100%]  h-full object-cover "
                    src={Arbetglas3}
                />

                <h2 className="col-start-2 col-end-12 row-start-5 row-end-6 dt:col-start-8 dt:row-start-2 dt:row-end-4 text-[2rem] dt:text-[3rem] text-custom-darkgreen font-extrabold">
                    {title}
                </h2>
                <p className="col-start-2 col-end-12 row-start-7 mt-[30px] dt:col-start-8  dt:row-start-4 dt:row-end-6  DescCustomPC">
                    {desc.first}
                </p>
                <p className="col-start-2 dt:col-start-8 col-end-12  row-start-9 dt:row-start-6 dt:row-end-9 row-end-11 dt:mt-0  dt:DescCustomPC">
                    {desc.second}
                </p>

                <Button
                    className="col-start-3 row-start-11   dt:col-start-8 col-end-10 translate-y-5 dt:row-start-8 dt:row-end-9 
                 StyleButtonNav"
                >
                    SE LEDIGA TIDER
                </Button>
            </div>
        </>
    );
};
export default WorkGlassPost1;
