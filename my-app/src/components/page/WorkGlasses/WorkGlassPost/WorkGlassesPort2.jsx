import Arbetglas1 from "../../../assets/Arbetglas1.jpg";

const WorkGlassPost2 = (props) => {
    const { title, desc, job } = props;

    return (
        <>
            <div className="font-Exo grid h-[120vh] grid-cols-12 grid-rows-12 bg-[#fbfbfb]      ">
                <img
                    alt="arbetGlas"
                    className="  rounded-xl shadow-Shadow col-start-2 col-end-12 dt:col-start-8 dt:col-end-12 row-start-1 row-end-4 dt:row-end-12 w-full h-full object-cover "
                    src={Arbetglas1}
                />

                <h2 className="col-start-2 col-end-10 row-start-4 row-end-5 mt-[20px]  dt:col-end-12 dt:row-start-2 dt:row-end-4 text-[2rem] dt:text-[3rem] text-custom-darkgreen font-extrabold">
                    {title}
                </h2>
                <p className="col-start-2 col-end-13 dt:col-end-7 row-start-5 dt:row-start-4 row-end-5 text-custom-darkgreen DescCustomPC">
                    {desc.first}
                </p>

                <p className="font-bold col-start-2 col-end-12 row-start-8 row-end-10 dt:row-start-6 dt:row-end-7 dt:col-end-7 text-custom-darkgreen DescCustomPC">
                    {desc.second}
                </p>

                <ol className="list-disc mt-[20px] ml-5 col-start-2 col-end-7 row-start-9 row-end-11 dt:row-start-7 dt:m-0 dt:row-end-9 text-custom-darkgreen ">
                    {Object.values(job).map((value, index) => (
                        <li key={index}> {value}</li>
                    ))}
                </ol>
                <p className="col-start-2 col-end-12 row-start-12 row-end-13 dt:row-start-10 dt:col-end-7 text-custom-darkgreen DescCustomPC ">
                    {desc.third}
                </p>
            </div>
        </>
    );
};
export default WorkGlassPost2;
