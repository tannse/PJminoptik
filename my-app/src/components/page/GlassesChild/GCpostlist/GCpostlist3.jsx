const GCpostlist3 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[50vh] grid-cols-12 grid-rows-6 mt-[100px] ">
                <h1 className="col-start-2 col-end-7 row-start-1  text-[3rem] font-bold   mt-[-10px] text-custom-darkgreen">
                    {title}
                </h1>
                <p className="col-start-2 col-end-12 row-start-2 font-extrabold text-custom-darkgreen DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-  text-custom-darkgreen mt-[-20px] DescCustomPC">
                    {desc?.second}
                </p>
                <p className="col-start-2 col-end-12 row-start-5  text-custom-darkgreen mt-[-20px] DescCustomPC">
                    {desc?.third}
                </p>
                <p className="col-start-2 col-end-12 row-start-6  text-custom-darkgreen mt-[-10px] DescCustomPC">
                    {desc?.four}
                </p>
            </div>
        </>
    );
};
export default GCpostlist3;
