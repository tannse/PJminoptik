import OfferImage from "../../assets/OfferImage.jpg";
const OfferPost2 = (props) => {
    return (
        <div className=" flex justify-center bg-[#f6faf6] vh-[100vh]">
            <div className="w-[calc(100%-240px)]    ">
                <div className="flex justify-between items-center h-[80vh]">
                    <img
                        src={OfferImage}
                        alt="Store Optik"
                        className="w-2/5  rounded-xl object-cover"
                    />
                    <div className="w-[55%] ">
                        <h2 className="h2CustomPC text-[#00544a]">
                            5 FÖRDELAR MED MIN OPTIK
                        </h2>
                        <hr className="mt-5" />
                        <ol
                            start={1}
                            className="list-decimal ml-4 mt-7 flex flex-col gap-y-6"
                        >
                            <li>
                                <h3 className="h3CustomPC text-[#00544a]">
                                    Vårt personliga erbjudande till Dig är:
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="DescCustomPC">
                                        Lika billigt som att handla på Internet!
                                    </li>
                                    <li className="DescCustomPC">
                                        Vi har sänkt priserna på kontaktlinser.
                                        Vi har gjort det för att Du som kund ska
                                        kunna komma till oss och få
                                        professionell rådgivning nära Dig.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="h3CustomPC text-[#00544a]">
                                    Du har en legitimerad optiker nära Dig
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="DescCustomPC">
                                        Ögonläkare på plats i butiken varannan
                                        månad
                                    </li>
                                    <li className="DescCustomPC">
                                        Tillsammans med mig får Du chans och
                                        möjlighet att prova, diskutera och
                                        kontrollera Din syn.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="h3CustomPC text-[#00544a]">
                                    Ögonläkare på plats i butiken varannan månad
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="DescCustomPC">
                                        Lätt att få tid!
                                    </li>
                                    <li className="DescCustomPC">
                                        Inga långa transporter – Vi undersöker
                                        det på plats!
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="h3CustomPC text-[#00544a]">
                                    Det är Du själv som bestämmer
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="DescCustomPC">
                                        Vill Du bara kontrollera att allting är
                                        som det ska eller kanske tar Du
                                        tillfället i akt att utnyttja vårt
                                        erbjudande, det är bara Du som vet!
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="h3CustomPC text-[#00544a]">
                                    Mer än ”bara” en optike
                                </h3>
                                <ul className="list-disc ml-4">
                                    <li className="DescCustomPC">
                                        Se oss som Ditt bollplank i alla frågor
                                        gällande Din syn, Dina barns syn, Din
                                        partners syn, Dina föräldrars syn eller
                                        varför inte ”bara” komma in för att säga
                                        hej! Vi finns till för Dig.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OfferPost2;
