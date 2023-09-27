import Arbetglas1 from "../../../assets/Arbetglas1.jpg";
import { Button } from "@material-tailwind/react";
const WorkGlassPost2 = (props) => {
    const { title, desc, job } = props;
    console.log("job", job);

    return (
        <>
            <div className="font-Exo grid h-[100vh] grid-cols-12 grid-rows-12 bg-[#fbfbfb]      ">
                <img
                    className="  rounded-xl shadow-Shadow col-start-8 col-end-12 row-start-2 row-end-12 w-full h-full object-cover "
                    src={Arbetglas1}
                />

                <h2 className="col-start-3 col-end-6 row-start-3 row-end-4 text-[3rem] text-custom-darkgreen font-extrabold">
                    {title}
                </h2>
                <p className="col-start-2 col-end-7 row-start-4 row-end-6 text-custom-darkgreen DescCustomPC">
                    {desc.first}
                </p>

                <p className="font-bold col-start-2 col-end-7 row-start-6 row-end-8 text-custom-darkgreen DescCustomPC">
                    {desc.second}
                </p>

                <ol className="list-disc ml-5 col-start-2 col-end-7 row-start-7 row-end-10 text-custom-darkgreen ">
                    {Object.values(job).map((value, index) => (
                        <li key={index}> {value}</li>
                    ))}
                </ol>
                <p className="col-start-2 col-end-7 row-start-10 row-end-11 text-custom-darkgreen DescCustomPC ">
                    {desc.third}
                </p>
            </div>
        </>
    );
};
export default WorkGlassPost2;
