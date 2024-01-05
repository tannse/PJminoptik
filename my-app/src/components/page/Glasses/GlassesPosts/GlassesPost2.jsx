import GlassesPost2Img1 from "../../../assets/GlassesPost2Img1.jpg";
import GlassesPost2Img2 from "../../../assets/GlassesPost2Img2.jpg";
const GlassPost2 = (props) => {
    const {
        glass2titl1,
        glass2titl2,
        glass2titl3,

        glass2des1,
        glass2des2,
        glass2des3,
        glass2des4,
        glass2des5,
        glass2des6,
    } = props;
    return (
        <>
            <div className="font-Exo flex justify-center  dt:h-[140vh]  gap-x-8 bg-premierColor ">
                <div className="w-[80%] flex flex-col  mt-[3rem]">
                    <h2 className=" text-[2rem] w-full mx-auto text-center py-[3rem] dt:text-[2rem] rounded-full text-white bg-premierColor font-extrabold">
                        {glass2titl1}
                    </h2>
                    <div className="flex flex-col ">
                        <div className="flex flex-1 mt-[1rem]">
                            <div className="flex gap-x-8 leading-[2rem]">
                                <img
                                    src={GlassesPost2Img1}
                                    alt="GLASÖGON"
                                    className=" flex-1 rounded-xl shadow-Shadow mx-auto w-[70%]  h-[50vh] object-cover "
                                />
                                <div className="flex flex-1 flex-col items-center ">
                                    <h3 className="text-[24px] font-semibold text-white">
                                        {glass2titl2}
                                    </h3>
                                    <p className="text-[20px]  py-[20px] font-bold text-white">
                                        {glass2des1}
                                    </p>
                                    <p className=" DescCustomPC text-center  text-white">
                                        {glass2des2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center leading-[2rem] mt-[3rem] ">
                            <div className=" flex gap-x-8 leading-[2.rem]">
                                <div className="flex flex-1 flex-col items-center">
                                    <h3 className="text-[24px] font-semibold text-white">
                                        {glass2titl3}
                                    </h3>
                                    <p className="text-[20px] py-[20px] text-center font-bold text-white">
                                        {glass2des3}
                                    </p>
                                    <p className=" DescCustomPC text-center  text-white">
                                        {glass2des4}
                                    </p>
                                    <p className=" DescCustomPC text-center  text-white">
                                        {glass2des5}
                                    </p>
                                    <p className=" DescCustomPC text-center  text-white">
                                        {glass2des6}
                                    </p>
                                </div>
                                <img
                                    src={GlassesPost2Img2}
                                    alt="KONTAKTLINSER"
                                    className=" flex-1 rounded-xl shadow-Shadow h-[40vh] my-auto w-[70%] object-cover "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default GlassPost2;
