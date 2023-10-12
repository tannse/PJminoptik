const IntroPost2 = (props) => {
    const { title, option, desc } = props;
    return (
        <div className="w-full h-fit flex justify-center relative ">
            <div className="w-[calc(100%-20%)]   flex flex-col items-center  ">
                <div className="   flex flex-col   ">
                    <h2 className="h2CustomMobile  text-custom-darkgreen dt:text-[2.5rem] mt-[20px]">
                        {title}
                    </h2>
                    <hr className="self-center w-[51vw] mt-[21px]" />
                    <ul className="  px- mt-[41px] list-disc">
                        <li className="DescCustomMobile font-semibold font-Exo text-[#118273]">
                            {option.first}
                        </li>
                        <li className="DescCustomMobile font-semibold font-Exo text-[#118273]">
                            {option.second}
                        </li>
                        <li className="DescCustomMobile font-semibold font-Exo text-[#118273]">
                            {option.third}
                        </li>
                    </ul>
                </div>
                <div className="mt-[51px] ">
                    <h3 className="DescCustomMobile font-semibold font-Exo text-[#118273]">
                        {option.first}
                    </h3>
                    <p className="mt-[11px] text-14">{desc.first}</p>
                    <p className="mt-[21px] text-14">{desc.second}</p>
                </div>
                <div className="mt-[51px] ">
                    <h3 className="DescCustomMobile font-semibold font-Exo text-[#118273]">
                        {" "}
                        {option.second}
                    </h3>
                    <p className=" mt-[11px] text-black font-Exo font-semibold text-16">
                        {desc.third}
                    </p>
                    <p className=" mt-[11px] text-14">
                        <span className="text-16 font-Exo font-semibold">
                            Glasögon
                        </span>
                        {desc.four}
                    </p>
                    <p className=" mt-[11px] text-14">
                        <span className="text-16 font-Exo font-semibold">
                            Kontaktlinser
                        </span>
                        {desc.five}
                    </p>
                    <p className=" mt-[11px] text-14">
                        <span className="text-16 font-semibold">
                            förstorande
                        </span>
                        {desc.sixth}
                    </p>
                </div>
                <button className=" StyleButtonNav mt-[20px]">
                    BOKA TID ONLINE
                </button>
            </div>
        </div>
    );
};
export default IntroPost2;
