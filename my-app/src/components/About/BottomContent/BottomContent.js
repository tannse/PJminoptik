import Optik2 from "../../assets/OptikVideo2.mp4";

const BottomContent = (props) => {
    const { titleBottom } = props.BottomData;
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[calc(100%-240px)]">
                <h3 className="text-[50px] mt-[124px] mb-[50px] font-Exo font-semibold text-[#118273]">
                    {titleBottom}
                </h3>
                <video
                    className="w-full mb-[90px] shadow-Shadow100 rounded-[20px] max-w-full h-[70vh] object-cover brightness-60"
                    autoPlay
                    playsInline
                    loop
                    muted
                    src={Optik2}
                    type="video/mp4"
                ></video>
            </div>
        </div>
    );
};

export default BottomContent;
