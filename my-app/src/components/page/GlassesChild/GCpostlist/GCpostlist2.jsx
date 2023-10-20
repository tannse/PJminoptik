import RupEye1 from "../../../assets/rupeye.jpg";
import RupEye2 from "../../../assets/rupeye2.jpg";
const GCpostlist2 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid dt:h-[100vh] h-[130vh] grid-cols-10  grid-rows-8 dt:grid-rows-12 dt:grid-cols-12 gap-y-10 dt:gap-x-4 bg-[#fbfbfb]">
                <h1 className="col-start-2 col-end-11 dt:col-end-7 row-start-1 row-end-2 text-[2rem] dt:text-[3rem] font-bold mt-[20px] dt:mt-[-10px] text-custom-darkgreen">
                    {title}
                </h1>
                <img
                    src={RupEye1}
                    alt="RupEye"
                    className="  col-start-2 col-end-10 row-start-3 row-end-6 dt:col-end-7 dt:row-start-2 dt:row-end-8 shadow-Shadow rounded-xl w-full h-full object-cover"
                />
                <img
                    src={RupEye2}
                    alt="RupEye"
                    className=" col-start-2 col-end-10 row-start-6 row-end-9 dt:col-start-7 dt:col-end-12 dt:row-start-2 dt:row-end-8 shadow-Shadow rounded-xl w-full h-full object-cover"
                />
                <figcaption className="col-start-2 col-end-10 row-start-9 dt:row-start-8 dt:row-end-8 dt:col-start-6 dt:col-end-8 italic text-custom-darkgreen  dt:m-auto mt-[-25px]">
                    Photo(dribble)
                </figcaption>
                <p className="col-start-2 col-end-10 row-start-9 dt:row-start-9 dt:col-start-4 dt:col-end-10 ml-auto mr-auto font-extrabold text-custom-darkgreen font-semibold DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-10 row-start-10 row-end-11 dt:row-start-10 dt:col-start-2 dt:col-end-12 text-custom-darkgreen font-semibold DescCustomPC">
                    {desc?.second}
                </p>
                <p className="col-start-2 col-end-10 row-start-12 row-end-11 dt:row-start-11 dt:col-start-2 dt:col-end-12 text-custom-darkgreen font-semibold DescCustomPC">
                    {desc?.third}
                </p>
            </div>
        </>
    );
};
export default GCpostlist2;
