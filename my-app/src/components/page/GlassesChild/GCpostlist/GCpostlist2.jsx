import RupEye1 from "../../../assets/rupeye.jpg";
import RupEye2 from "../../../assets/rupeye2.jpg";
const GCpostlist2 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[130vh] grid-cols-12 grid-rows-12  gap-y-10 bg-[#fbfbfb]">
                <h1 className="col-start-2 col-end-11 dt:col-end-7 row-start-2 row-end-2 text-[2rem] dt:text-[3rem] font-bold dt:mt-[-10px] text-custom-darkgreen">
                    {title}
                </h1>
                <img
                    src={RupEye1}
                    alt="RupEye"
                    className="  col-start-2 col-end-12 dt:col-end-7 row-start-3 dt:row-start-2 row-end-6 dt:row-end-9  shadow-Shadow rounded-xl w-full  h-full object-cover  "
                />
                <img
                    src={RupEye2}
                    alt="RupEye"
                    className=" col-start-2 col-end-12 dt:col-start-7 row-start-6 dt:row-start-3 row-end-9 shadow-Shadow rounded-xl w-full  h-full object-cover  "
                />
                <figcaption className="col-start-2 col-end-12 row-start-9 italic text-custom-darkgreen  mt-[-25px]  text-center">
                    Photo(dribble)s
                </figcaption>
                <p className="col-start-2 col-end-12 row-start-9 dt:row-start-10 font-extrabold text-center mt-[10px] text-custom-darkgreen DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-10  dt:row-start-11 row-end-11 mt-[-20px] text-custom-darkgreen  DescCustomPC">
                    {desc?.second}
                </p>
            </div>
        </>
    );
};
export default GCpostlist2;
