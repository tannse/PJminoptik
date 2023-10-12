const GCpostlist3 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[100vh] dt:h-[50vh] grid-cols-12 grid-rows-8 dt:grid-rows-6">
                <h1 className="col-start-2 col-end-12 dt:col-end-7 row-start-1  text-[2rem] dt:text-[3rem] font-bold   mt-[-10px] text-custom-darkgreen">
                    {title}
                </h1>
                <p className="col-start-2 col-end-12 row-start-2 font-extrabold text-custom-darkgreen DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-3 dt:row-start-2  text-custom-darkgreen py-4 dt:mt-[-20px] DescCustomPC">
                    {desc?.second}
                </p>
                <p className="col-start-2 col-end-12 row-start-6 dt:row-start-5  text-custom-darkgreen dt:mt-[-20px] DescCustomPC">
                    {desc?.third}
                </p>
                <p className="col-start-2 col-end-12 row-start-8 dt:row-start-6  text-custom-darkgreen mt-[-0px] DescCustomPC">
                    {desc?.four}
                </p>
            </div>
        </>
    );
};
export default GCpostlist3;
