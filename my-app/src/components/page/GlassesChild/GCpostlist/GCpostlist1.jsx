import ChillEye1 from "../../../assets/ChildEye1.jpg";
const GCpostlist1 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[90vh] grid-cols-12 grid-rows-12 ">
                <h1 className="col-start-1 dt:col-start-4 col-end-12 row-start-1 row-end-2 text-[2rem]  dt:text-[3rem] font-bold  ml-[30px] dt:mt-[-30px] text-custom-darkgreen">
                    {title}
                </h1>
                <img
                    src={ChillEye1}
                    alt="ChildEye"
                    className=" dt:col-start-3 col-start-2 col-end-12 dt:col-end-11 row-start-2 mt-[10%] row-end-6 dt:row-end-9 dt:rounded-[50%] shadow-Shadow w-full h-full object-cover  "
                />
                <figcaption className="col-start-2 col-end-12 row-start-6  dt:row-start-9 italic mt-[40px] text-custom-darkgreen  text-center">
                    Photo(dribble)
                </figcaption>
                <p className="col-start-2 col-end-12 row-start-7 dt:row-start-10  text-custom-darkgreen DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-9 row-end-11 text-custom-darkgreen DescCustomPC">
                    {desc?.second}
                </p>
                <p className="col-start-2 col-end-12 row-start-11 row-end-12 pb-4 text-custom-darkgreen DescCustomPC">
                    {desc?.third}
                </p>
            </div>
        </>
    );
};
export default GCpostlist1;
