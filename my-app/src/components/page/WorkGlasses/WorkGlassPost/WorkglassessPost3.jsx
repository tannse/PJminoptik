import Arbetglas4 from "../../../assets/Arbetglas4.jpg";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost3 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <>
                <div className="font-Exo grid dt:h-[80vh] h-[100vh] grid-cols-12 grid-rows-12 gap-10">
                    <img
                        alt="arbet Glas"
                        className=" col-start-2 col-end-12 row-start-2 row-end-6 rounded-xl shadow-Shadow dt:col-start-2 dt:col-end-7 dt:row-start-2 dt:row-end-12 w-[100%] h-full object-cover "
                        src={Arbetglas4}
                    />

                    <h2 className="col-start-2 col-end-12 row-start-7 row-end-8 dt:col-start-8 dt:col-end-12 dt:row-start-3 dt:row-end-4 text-[2rem] dt:text-[3rem] text-custom-darkgreen font-extrabold">
                        {title}
                    </h2>
                    <p className="col-start-2 col-end-12 row-start-8 row-end-9 mt-[40px] dt:col-start-8 dt:col-end-12 dt:row-start-5 dt:row-end-8 DescCustomPC ">
                        {desc.first}
                    </p>
                    <p className="col-start-2 col-end-12 row-start-11 row-end-12 dt:col-start-8 dt:col-end-12 dt:row-start-8 dt:row-end-10 font-semibold DescCustomPC ">
                        {desc.second}
                    </p>
                </div>
            </>
        </>
    );
};
export default WorkGlassPost3;
