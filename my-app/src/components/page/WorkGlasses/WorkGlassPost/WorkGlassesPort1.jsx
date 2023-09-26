import Arbetglas3 from "../../../assets/Arbetglas3.jpg";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost1 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="font-Exo grid h-[100vh] grid-cols-12 grid-rows-12 bg   ">
                <img
                    className=" rounded-xl shadow-Shadow col-start-2 col-end-7 row-start-2 row-end-12 w-[100%] h-full object-cover "
                    src={Arbetglas3}
                />

                <h2 className="col-start-8 col-end-12 row-start-4 row-end-5 text-[27px] text-custom-darkgreen font-extrabold">
                    {title}
                </h2>
                <p className="col-start-8 col-end-12 row-start-5 row-end-6 ">
                    {desc.first}
                </p>
                <p className="col-start-8 col-end-12 row-start-6 row-end-7 ">
                    {desc.second}
                </p>

                <Button className="col-start-8 col-end-10 row-start-8 row-end-9 StyleButtonNav">
                    SE LEDIGA TIDER
                </Button>
            </div>
        </>
    );
};
export default WorkGlassPost1;
