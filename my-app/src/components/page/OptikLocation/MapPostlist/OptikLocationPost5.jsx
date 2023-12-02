import LocationPost5Img from "../../../assets/LocationPost5Img.png";
const OptikLocation5 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="my-[40px] h-[70vh] flex justify-center items-center bg-[#F7FDF7]">
                <div className="w-[90%] ">
                    <div className="flex items-center gap-x-5 w-[100%]">
                        <div className="flex-1">
                            <img
                                className="h-[60vh] w-full rounded-lg object-cover"
                                alt="Team"
                                src={LocationPost5Img}
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[30px] text-center text-custom-darkgreen">
                                {title}
                            </h3>
                            <p className="text-center leading-[30px] mt-[36px] DescCustomPC">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OptikLocation5;
