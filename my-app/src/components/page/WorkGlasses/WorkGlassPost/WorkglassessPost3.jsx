import Arbetglas4 from "../../../assets/Arbetglas4.jpg";
import { Button } from "@material-tailwind/react";
export const WorkGlassPost3 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <>
                <div className="font-Exo grid h-[80vh] grid-cols-12 grid-rows-12 bg   ">
                    <img
                        className=" rounded-xl shadow-Shadow col-start-2 col-end-7 row-start-2 row-end-12 w-[100%] h-full object-cover "
                        src={Arbetglas4}
                    />

                    <h2 className="col-start-8 col-end-12 row-start-3 row-end-4 text-[3rem] text-custom-darkgreen font-extrabold">
                        {title}
                    </h2>
                    <p className="col-start-8 col-end-12 row-start-6 row-end-8 DescCustomPC ">
                        {desc.first}
                    </p>
                    <p className="col-start-8 col-end-12 row-start-9 row-end-10 font-semibold DescCustomPC ">
                        {desc.second}
                    </p>

                    <Button className="col-start-8 col-end-10 row-start-12 row-end-13 mt-[-50px] StyleButtonNav">
                        SE LEDIGA TIDER
                    </Button>
                </div>
            </>
        </>
    );
};
export default WorkGlassPost3;
