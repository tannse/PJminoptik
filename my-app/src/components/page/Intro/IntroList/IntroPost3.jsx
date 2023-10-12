import Optik2 from "../../../assets/OptikVideo2.mp4";

const IntroPost3 = (props) => {
    const { title } = props;
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[calc(100%-20%)]">
                <h3 className=" mt-[50px]  dt:mt-[124px] mb-[50px] font-Exo font-semibold text-center dt:h2CustomPC dt:text-custom-darkgreen">
                    {title}
                </h3>
                <video
                    className="w-full mb-[90px] shadow-Shadow100 rounded-[20px] max-w-full h-[40vh] dt:h-[70vh] object-cover brightness-60"
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

export default IntroPost3;
