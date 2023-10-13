import Arbetglas5 from "../../../assets/Arbetglas5.jpg";

export const WorkGlassPost4 = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="font-Exo grid h-[50vh] dt:h-[60vh] grid-cols-12 grid-rows-7 bg   bg-[#fbfbfb]  ">
                <img
                    alt="arbet Glas"
                    className="dt:rounded-[100%]  col-start-8 col-end-12 dt:col-end-10 row-start-3 dt:row-start-2 
                     row-end-6 w-full h-full object-cover  "
                    src={Arbetglas5}
                />
                <h2 className="col-start-2 dt:col-start-3 col-end-6 row-start-1 dt:row-start-3 row-end-4 mt-[20px] dt:mt-0 text-[3rem] text-custom-darkgreen font-extrabold">
                    {title}
                </h2>
                <p className="col-start-2 dt:col-start-3 col-end-7 row-start-3 dt:row-start-4 row-end-7 text-custom-darkgreen DescCustomMobile font-bold DescCustomPC">
                    {desc}
                </p>
            </div>
        </>
    );
};
export default WorkGlassPost4;
