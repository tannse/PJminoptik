import OfferImage from "../../../assets/OfferImage.webp";
const OfferPost2 = (props) => {
    return (
        <div className=" flex justify-center bg-[#f6faf6] h-fit mt-[50px] ">
            <div className="w-[calc(100%-20%)]">
                <div className="flex flex-col dt:flex-row justify-between items-center">
                    <img
                        src={OfferImage}
                        alt="Store Optik"
                        className="bg-[#fff] w-2/5 hidden dt:block rounded-xl object-cover"
                    />
                    <div className="dt:w-[55%]  w-full">
                        <h2 className="h2CustomMobile py-[20px] text-[#00544a]">
                            5 FÖRDELAR MED MIN OPTIK
                        </h2>
                        <img
                            src={OfferImage}
                            alt="Store Optik"
                            className="bg-[#fff] dt:hidden w-full rounded-xl object-cover"
                        />
                        <hr className="mt-5" />
                        <ol
                            start={1}
                            className="list-decimal dt:ml-4 mt-7 flex flex-col gap-y-9"
                        >
                            <li>
                                <h3 className="h3CustomPC text-[#00544a]">
                                    Vårt personliga erbjudande till Dig är:
                                </h3>
                                <ul className="list-disc dt:ml-4 dt:mt-0 mt-4">
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
                                <ul className="list-disc dt:ml-4 dt:mt-0 mt-4">
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
                                <ul className="list-disc dt:ml-4 dt:mt-0 mt-4">
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
                                <ul className="list-disc dt:ml-4 dt:mt-0 mt-4">
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
                                <ul className="list-disc dt:ml-4 dt:mt-0 mt-4">
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
