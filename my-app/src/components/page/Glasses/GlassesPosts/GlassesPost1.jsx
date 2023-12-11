import { Button } from "@material-tailwind/react";
import GlassesPostImg1 from "../../../assets/GlassesPostImg1.png";
const GlassPost1 = (props) => {
    const { glasstitl1, glasstitl2, glassdes1 } = props;
    return (
        <>
            <div className="font-Exo flex justify-center items-center dt:h-[100vh]  gap-x-8 bg-[#fbf8f8] ">
                <div className="w-[80%]">
                    {" "}
                    <h2 className=" text-[2rem] w-[60%] mx-auto text-center p-5 dt:text-[2rem] rounded-full text-white bg-premierColor font-extrabold">
                        {glasstitl1}
                    </h2>
                    <div className="flex gap-x-8 mt-[4rem]">
                        {" "}
                        <div className="flex-1">
                            <span className="text-[20px] font-semibold text-custom-darkgreen">
                                {glasstitl2}
                            </span>
                            <hr className="w-[60%] mt-[0.5rem] border-[1px] border-grey" />
                            <p className="  mt-[20px] leading-8 dt:row-start-4 dt:row-end-6 text-custom-darkgreen DescCustomPC">
                                {glassdes1}
                            </p>
                            <Button className=" mt-[2rem] StyleButtonNav">
                                SE LEDIGA TIDER
                            </Button>
                        </div>
                        <img
                            alt="Arbet Glas"
                            className=" flex-1 rounded-xl shadow-Shadow h-[50vh] object-cover "
                            src={GlassesPostImg1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default GlassPost1;
