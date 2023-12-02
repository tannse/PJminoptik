import OptikLocationImg1 from "../../../assets/OptikLocationImg1.png";
const OptikLocationPost1 = (props) => {
    const { title, desc } = props;
    return (
        <div className="flex justify-center items-center relative bg-img  w-[100%]">
            <div className="absolute w-[90%]">
                <h3 className="text-[3rem] text-[#fff] ">{title}</h3>
                <p className="DescCustomPC italic text-[1.3rem] mt-[20px] text-[#fff]">
                    {desc}
                </p>
            </div>
            <img
                className="w-[100%] h-[80vh]"
                alt="Kontakt MinOptik"
                src={OptikLocationImg1}
            />
        </div>
    );
};
export default OptikLocationPost1;
