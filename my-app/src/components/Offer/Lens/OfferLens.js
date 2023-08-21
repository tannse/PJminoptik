import CardOptik from "../../assets/CardOptik.png";
import React from "react";
const OfferLens = (props) => {
    return (
        <div className="h-[60vh] flex justify-center mt-7">
            <div className="w-[calc(100%-240px)] ">
                <div className="flex bg-premierColor ">
                    <img
                        src={CardOptik}
                        className="w-3/5 h-[50vh] object-cover"
                    />
                    <div>
                        <h1 className="text-[45px] font-Exo text-white  font-extrabold">
                            {props.offerTitle}
                        </h1>
                        <p className="text-[18px] font-semibold font-Exo text-white">
                            {props.offerDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OfferLens;
