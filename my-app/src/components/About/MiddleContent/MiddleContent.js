const MiddleContent = (props) => {
    const {
        title,
        option1,
        option2,
        option3,
        descO1,
        descO1b,
        descO2,
        descO2b,
        descO3,
        descO4,
    } = props.DataMiddle;
    return (
        <div className="w-full h-fit   flex  justify-center relative ">
            <div className="w-[calc(100%-240px)]   flex flex-col items-center  ">
                <div className="   flex flex-col   ">
                    <h2 className="text-[30px] font-Exo font-semibold text-[#118273]">
                        {title}
                    </h2>
                    <hr className="self-center w-[50vw] mt-[20px]" />
                    <ul className="  mt-[40px] list-disc">
                        <li className="text-[1rem] font-semibold font-Exo text-[#118273]">
                            {option1}
                        </li>
                        <li className="text-[1rem] font-semibold font-Exo text-[#118273]">
                            {option2}
                        </li>
                        <li className="text-[1rem] font-semibold font-Exo text-[#118273]">
                            {option3}
                        </li>
                    </ul>
                </div>
                <div className="mt-[50px] ">
                    <h3 className="text-[1rem] font-semibold font-Exo text-[#118273]">
                        {option1}
                    </h3>
                    <p className="mt-[10px] text-14">{descO1}</p>
                    <p className="mt-[20px] text-14">{descO1b}</p>
                </div>
                <div className="mt-[50px] ">
                    <h3 className="text-[1rem] font-semibold font-Exo text-[#118273]">
                        {option2}
                    </h3>
                    <p className=" mt-[10px] text-black font-Exo font-semibold text-16">
                        {descO2}
                    </p>
                    <p className=" mt-[10px] text-14">
                        <span className="text-16 font-Exo font-semibold">
                            Glasögon
                        </span>
                        {descO2b}
                    </p>
                    <p className=" mt-[10px] text-14">
                        <span className="text-16 font-Exo font-semibold">
                            Kontaktlinser
                        </span>
                        {descO3}
                    </p>
                    <p className=" mt-[10px] text-14">
                        {" "}
                        <span className="text-16 font-semibold">
                            Förstorande
                        </span>
                        {descO4}
                    </p>
                    <button className=" StyleButtonNav">BOKA TID ONLINE</button>
                </div>
            </div>
        </div>
    );
};
export default MiddleContent;
