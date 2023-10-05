import kidBigglasses from "../../../assets/kidBigglasses.jpg";
const GCpostlist4 = (props) => {
    const { title, desc } = props;

    return (
        <>
            <div className="font-Exo grid h-[130vh] grid-cols-12 grid-rows-12  ">
                <h1 className="col-start-5 col-end-10 row-start-2  text-[3rem]  font-bold ml-[5px] mt-[-30px] text-custom-darkgreen">
                    {title}
                </h1>
                <hr className="h-[2px] row-start-3 mt-[-10%] col-start-5 col-end-9  bg-premierColor font-extrabold  " />
                <img
                    src={kidBigglasses}
                    alt="KidBigGlass"
                    className=" col-start-3 col-end-11 row-start-3 row-end-8 rounded-[30%] shadow-Shadow w-full h-full object-cover  "
                />
                <figcaption className=" col-start-10 row-start-5 row-end-7  italic rotate-90 text mt-[-15px]  text-custom-darkgreen  ">
                    Picture (dribble)
                </figcaption>
                <p className="col-start-2 col-end-12 row-start-9 mt-[15px]   text-custom-darkgreen DescCustomPC">
                    {desc?.first}
                </p>
                <p className="col-start-2 col-end-12 row-start-10 row-end-11 mt-[15px] text-custom-darkgreen DescCustomPC">
                    {desc?.second}
                </p>
            </div>
        </>
    );
};
export default GCpostlist4;
