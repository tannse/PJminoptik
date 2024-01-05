import Arbetglas3 from "../../../assets/Arbetglas3.webp";
const GlassPost3 = (props) => {
    const { glass3tit, glass3des } = props;
    return (
        <div className="font-Exo flex justify-center items-center dt:h-[80vh]  gap-x-8 bg-[#fbf8f8] ">
            <div className="w-[80%]">
                <div className="flex gap-x-8 mt-[4rem]">
                    {" "}
                    <img
                        alt="Arbet Glas"
                        className=" flex-1 rounded-xl shadow-Shadow h-[50vh] object-cover "
                        src={Arbetglas3}
                    />
                    <div className="flex-1">
                        <span className="text-[20px] font-semibold text-custom-darkgreen">
                            {glass3tit}
                        </span>
                        <hr className="w-[60%] mt-[0.5rem] border-[1px] border-grey" />
                        <p className="  mt-[20px] leading-8 dt:row-start-4 dt:row-end-6 text-custom-darkgreen DescCustomPC">
                            {glass3des}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GlassPost3;
