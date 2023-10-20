const GCpostlist3 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[140vh] dt:h-[50vh] grid-cols-12 grid-rows-8 dt:gap-y-[20px] dt:grid-rows-6 mt-[2rem]">
                <h1 className="col-start-2 col-end-12 row-start-1 dt:col-end-7 text-[2rem] dt:text-[3rem] font-bold dt:mt-[-10px] text-custom-darkgreen">
                    {title}
                </h1>
                <p className="col-start-2 col-end-12 row-start-2 row-end-3 my-auto font-extrabold text-custom-darkgreen DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-3 text-custom-darkgreen py-4 dt:mt-[-20px] DescCustomPC">
                    {desc?.second}
                </p>
                <p className="col-start-2 col-end-12 row-start-6 dt:row-start-4 dt:row-end-6 mt-[20px] dt:my-auto text-custom-darkgreen  DescCustomPC">
                    {desc?.third}
                </p>
                <p className="col-start-2 col-end-12 row-start-8 dt:row-start-6 text-custom-darkgreen DescCustomPC">
                    {desc?.four}
                </p>
            </div>
        </>
    );
};
export default GCpostlist3;
