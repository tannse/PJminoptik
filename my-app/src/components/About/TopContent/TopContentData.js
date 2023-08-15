import AboutPhoto from "../../assets/MinOptikAbout.jpg";
const TopContentData = (props) => {
    const { Title, Desc1, Desc2 } = props.Data;
    return (
        <div className=" flex flex-col items-center h-[80vh] ">
            <h1 className=" text-center font-bold font-Exo text-[#00564B] py-[28px] text-[50px]">
                {Title}
            </h1>
            <div className=" w-[calc(100%-220px)] flex justify-center h-[50vh] rounded-full bg-premierColor  ">
                <div className=" flex items-center justify-center w-[calc(100%-7em)]">
                    <div className="self-center ml-[5%]">
                        <p className="font-semibold text-[17px] line-clamp-3 text-white w-4/5">
                            {Desc1}
                        </p>
                        <p className="font-semibold text-[17px] line-clamp-6  mt-[20px] text-white w-4/5">
                            {Desc2}
                        </p>
                        <button className="StyleButtonNav  capitalize">
                            {" "}
                            SE LEDIGA TIDER
                        </button>
                    </div>

                    <img
                        className=" rounded-full shadow-whiteShadow self-center w-2/5 h-[40vh]  object-cover "
                        alt="Vad Gora En Optik"
                        src={AboutPhoto}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopContentData;
