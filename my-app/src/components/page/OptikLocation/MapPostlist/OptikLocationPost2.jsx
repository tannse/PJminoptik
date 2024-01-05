import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import ArbetGlas4 from "../../../assets/Arbetglas4.webp";
import SkeletonText from "../../../Card UI/SkeletonText";
import { motion } from "framer-motion";
import {
    ShowLeftAnimate,
    ShowSpecialAnimate90,
} from "../../../Card UI/Animation";
const OptikLocationPost2 = (props) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    if (!isLoaded) {
        return <SkeletonText />;
    }
    const containerStyle = {
        width: "600px",
        height: "400px",
        borderRadius: "50px",
    };
    const center = {
        lat: 55.47125,
        lng: 13.01937,
    };

    const {
        FirstTitle,
        SecondTitle,
        FirstDesc,
        SecondDesc,
        email,
        telefone,
        facebook,
        adress,
    } = props;
    return (
        <>
            <div className="flex  justify-center mt-[68px] h-[60vh] w-[100%]">
                <div className="w-[90%] ">
                    <div className="flex gap-x-5 justify-around">
                        {/* Kontakt Info */}
                        <div className=" flex-1">
                            <div>
                                <motion.h3
                                    {...ShowLeftAnimate}
                                    className="text-[3rem] text-custom-darkgreen "
                                >
                                    {FirstTitle}
                                </motion.h3>
                                <p className="DescCustomPC  text-[1.3rem] mt-[20px] text-custom-darkgreen">
                                    {FirstDesc}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold" typeof="Email">
                                    Email:
                                    <span className="underline">{email}</span>
                                </span>
                                <span className="font-semibold">
                                    Telefone:{" "}
                                    <span className="underline">
                                        {telefone}
                                    </span>{" "}
                                </span>
                                <span className="font-semibold">
                                    Facebook:{" "}
                                    <a
                                        href="https://www.facebook.com/messages/t/443355625752551"
                                        className="underline inhe"
                                    >
                                        {facebook}
                                    </a>
                                </span>
                                <span className="font-semibold">
                                    Adress:{" "}
                                    <span className="underline">{adress}</span>
                                </span>
                            </div>
                        </div>
                        {/* Google Map */}

                        <GoogleMap
                            center={center}
                            zoom={20}
                            mapContainerStyle={containerStyle}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="h-[60vh] flex justify-center items-center bg-[#fff]">
                <div className="w-[90%] ">
                    <div className="flex items-center gap-x-5 w-[100%]">
                        <div className="flex-1">
                            <motion.img
                                {...ShowSpecialAnimate90}
                                className="h-[50vh] w-full round object-cover"
                                alt="VISION"
                                src={ArbetGlas4}
                            />
                        </div>
                        <div className="flex-1">
                            <motion.h3
                                {...ShowLeftAnimate}
                                className="text-[30px] text-center text-custom-darkgreen"
                            >
                                {SecondTitle}
                            </motion.h3>
                            <p className="text-center mt-[36px] DescCustomPC">
                                {SecondDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OptikLocationPost2;
