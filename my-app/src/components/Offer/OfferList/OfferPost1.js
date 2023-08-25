import CardOptik from "../../assets/CardOptik.png";
import React from "react";
const OfferPost1 = (props) => {
    return (
        <div className="h-[55vh] flex justify-center mt-7">
            <div className="w-[calc(100%-240px)]  ">
                <div className="flex bg-premierColor items-center shadow-Shadow100 rounded-[20px]">
                    <img
                        src={CardOptik}
                        className=" w-2/4 h-[50vh] object-none"
                    />
                    <div className="w-2/4">
                        <h1 className="text-[3.4rem] font-Exo text-white  font-extrabold">
                            ERBJUDANDE KONTAKTLINSER
                        </h1>
                        <p
                            className="DescCustomPC text-white
                        "
                        >
                            Prova marknadens bästa linser hos din lokala optiker
                            i Vellinge – till samma pris som på internet!
                        </p>
                        <button className="StyleButtonNav capitalize">
                            {" "}
                            SE LEDIGA TIDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OfferPost1;
