import Arbetglas4 from "../../../assets/Arbetglas4.jpg";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost3 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <>
                <div className="font-Exo grid h-[100vh] grid-cols-12 grid-rows-12 bg   ">
                    <img
                        className=" rounded-xl shadow-Shadow col-start-2 col-end-7 row-start-2 row-end-12 w-[100%] h-full object-cover "
                        src={Arbetglas4}
                    />

                    <h2 className="col-start-8 col-end-12 row-start-4 row-end-5 text-[27px] text-custom-darkgreen font-extrabold">
                        {title}
                    </h2>
                    <p className="col-start-8 col-end-12 row-start-5 row-end-6 ">
                        {desc.first}
                    </p>
                    <p className="col-start-8 col-end-12 row-start-7 row-end-7 mt-[-30px]">
                        {desc.second}
                    </p>

                    <Button className="col-start-8 col-end-10 row-start-8 row-end-9 StyleButtonNav">
                        SE LEDIGA TIDER
                    </Button>
                </div>
            </>
        </>
    );
};
export default WorkGlassPost3;
