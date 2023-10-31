import { Button } from "@material-tailwind/react";
import Sunglass2 from "../../../assets/Sunglass2.jpg";
const SunGlassPost2 = (props) => {
    const { descFirst, descSecond, descThird, titleFirst, style } = props;
    return (
        <>
            <div className="font-Exo grid h-[200vh]  dt:h-[120vh] grid-cols-12 grid-rows-12">
                <h2 className=" mb:row-start-1 mb:row-end-2 col-start-2 col-end-12 dt:col-end-7 dt:row-start-1 dt:row-end-4 text-[27px] dt:text-[3rem] my-auto text-center text-custom-darkgreen font-extrabold">
                    {titleFirst}
                </h2>
                <p className="mb:row-start-2 mb:row-end-3 col-start-2 col-end-12 dt:col-end-7 row-start-8 row-end-11 dt:row-start-4 dt:row-end-9 text-center dt:mt-0 my-auto text-custom-darkgreen">
                    {descFirst}
                </p>
                <ol className="mb:row-start-3 mb:row-end-7 col-start-2 col-end-13 dt:col-end-7 row-start-8 row-end-11 dt:row-start-5 dt:row-end-9 list-disc dt:mx-auto text-custom-darkgreen">
                    {Object.values(style).map((value, index) => (
                        <li key={index} className="mt-[10px] font-semibold">
                            {value}
                        </li>
                    ))}
                </ol>
                <img
                    alt="Arbet Glas"
                    className=" mb:row-start-6 mb:row-end-9 rounded-xl shadow-whiteShadow50 col-start-2 col-end-12 dt:col-start-7 row-start-1 dt:row-start-3 dt:row-end-11 w-[100%] dt:ml-[20px] my-auto h-full object-contain"
                    src={Sunglass2}
                />
                <p className="mb:row-start-9 mb:row-end-11 col-start-2 col-end-12 dt:row-start-8 row-end-11 dt:col-end-7 text-center m-auto text-custom-darkgreen">
                    {descSecond}
                </p>
                <p className="mb:row-start-11 mb:row-end-13 col-start-2 col-end-12 dt:col-end-7 row-start-8 row-end-11 dt:row-start-10 dt:row-end-13 text-center m-auto text-custom-darkgreen text-[24px] font-bold">
                    {descThird}
                </p>
            </div>
        </>
    );
};
export default SunGlassPost2;
