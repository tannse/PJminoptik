import { Button } from "@material-tailwind/react";
import Sunglass1 from "../../../assets/Sunglass1.jpg";
const SunGlassPost1 = (props) => {
    const { desc, title } = props;
    return (
        <>
            <div className="font-Exo grid h-[120vh]  dt:h-[100vh] grid-cols-12 grid-rows-12 gap-8 bg-premierColor ">
                <h2 className=" mb:row-start-1 mb:row-end-4 col-start-2 col-end-13 dt:col-start-7 dt:col-end-12 dt:row-start-3 dt:row-end-4 text-[27px] dt:text-[3rem] dt:text-center m-auto text-[#fff] font-extrabold">
                    {title}
                </h2>
                <img
                    alt="Arbet Glas"
                    className=" mb:row-start-3 mb:row-end-7 rounded-xl shadow-whiteShadow50 col-start-2 col-end-12 dt:col-end-7 row-start-1 dt:row-start-2 row-end-5 dt:row-end-12 w-[100%] h-full object-cover "
                    src={Sunglass1}
                />
                <p className="mb:row-start-7 mb:row-end-10 col-start-2 col-end-12 row-start-8 row-end-11 dt:col-start-7 dt:row-start-6 dt:row-end-9 text-center dt:mt-0 my-auto text-[#fff] dt:DescCustomPC">
                    <span className="text-[1.5rem] font-semibold">
                        {desc.charAt(0)}
                    </span>
                    {desc.substring(1)}
                </p>

                <Button
                    className="mb:row-start-10 mb:row-end-12 col-start-3 col-end-11 row-start-10 dt:col-start-8 dt:col-end-11 dt:row-start-8 dt:row-end-8 m-auto dt:mx-auto translate-y-5 
         StyleButtonNav"
                >
                    SE LEDIGA TIDER
                </Button>
            </div>
        </>
    );
};
export default SunGlassPost1;
