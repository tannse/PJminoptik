import optik1 from "../../assets/optik1.mp4";

const Hero = () => {
    return (
        <div className="relative z-10 flex justify-center  ">
            <div className=" absolute dt:items-start dt:w-[100%]  mt-[120px]   dt:mt-[30vh] z-[999] ">
                <div className="dt:ml-[10%] text-center dt:text-start">
                    <h1 className="  font-Exo drop-shadow-lg  text-[20px]  dt:text-[50px] dt:font-semibold   text-white mb:font-bold drop-shadow-2xl">
                        VÄLKOMMEN TILL MIN OPTIK
                    </h1>
                    <p className="font-Exo font-semibold     text-white text-[16px] dt:text-[23px] from-neutral-100 drop-shadow-lg">
                        Min Optik är en väletableradoptiker i Vellinge
                        <br className="dt:hidden" /> med personligare stil och
                        kvalité i fokus!
                    </p>
                    <div className="flex flex-col mb:items-center dt:items-start   mt-[25vh] dt:ml-[0] dt:mt-0">
                        <span className="font-Exo  text-white font-semibold text-[15px]  dt:ml-0 dt:text-[23px] from-neutral-100 drop-shadow-lg">
                            350 kr för synundersökning, gäller både
                            <br className="dt:hidden" />
                            kontaklinsunder sökning och undersökning för
                            glasögon.
                        </span>

                        <button className="StyleButtonNav group hover:shadow-whiteShadow50 ease-linear duration-500 ">
                            <a
                                className=" ease-linear duration-200 w-[100%]  group-hover:text-[1.5rem]  "
                                href="./"
                                alt="BOKA TID"
                            >
                                BOKA TID ONLINE
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <video
                className="w-[100%] max-w-[100%] mb:h-[80vh] object-cover brightness-[60%] "
                autoPlay="autoplay"
                playsInline="playsinline"
                loop={true}
                muted={true}
                src={optik1}
                type="video/mp4"
            ></video>
        </div>
    );
};
export default Hero;
