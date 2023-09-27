import { LiaTimesSolid } from "react-icons/lia";
import useNotification from "../page/VisionCare/useNotification";
import logoOptik from "../assets/logoOptik.png";

const NotificationBuild = () => {
    const { notification, handleNotification } = useNotification();
    return (
        <section
            className={` touch-none  w-[100%] transition-all duration-300 ${
                notification ? "  hidden" : " "
            }`}
        >
            <div className="h-[50vh] transition-all  duration-300 rounded-[2rem] w-[50%]  fixed  top-[10rem] left-[25%]  flex flex-col items-center justify-center  z-[10000]   bg-[#f2f2f2]">
                <LiaTimesSolid
                    onClick={handleNotification}
                    className="absolute   text-custom-darkgreen top-4 left-[95%] text-26 font-semibold hover:rotate-90 hover:text-32 cursor-pointer duration-300 "
                />
                <img
                    className="  object-contain  w-[65%]  h-[10vh]   "
                    src={logoOptik}
                    alt="Logo"
                />

                <div className="px-[20px]">
                    <h1 className="text-[36px] text-center text-[#333]">
                        Webbplatsen är under uppbyggnad
                    </h1>
                    <p className="text-[20px] text-center text-[#777]">
                        Vi beklagar för besväret. Vi arbetar hårt för att
                        färdigställa vår webbplats. Kom tillbaka senare.
                    </p>
                </div>
                <hr className="h-[1px] w-[50%] mt-[20px] bg-premierColor drop-shadow-lg"></hr>
            </div>
            <div
                onClick={handleNotification}
                className="bg-bgOverlay overflow-hidden  fixed w-full  top-0 left-0 h-[100vh] transition-transform ease-in-out duration-500  z-[5000] "
            ></div>
        </section>
    );
};
export default NotificationBuild;
