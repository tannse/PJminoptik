import WellcomeImg from "../../assets/WellcomeImg.jpg";
const VisionPost2 = () => {
    return (
        <div className=" flex justify-center items-center bg-[#f6faf6] h-[90vh]">
            <div className="w-[calc(100%-240px)]    ">
                <div className="flex justify-between items-center ">
                    <img
                        src={WellcomeImg}
                        alt="WellcomeImg"
                        className="w-2/5  rounded-[200px] object-cover"
                    />
                    <div className="w-[55%] ">
                        <h2 className="h2CustomPC text-[2rem] text-[#00544a]">
                            SÅ HÄR GÅR SYNUNDERSÖKNINGEN TILL HOS OSS
                        </h2>
                        <hr className="mt-5" />
                        <ol
                            start={1}
                            className="list-decimal ml-7 mt-7 flex flex-col gap-y-6"
                        >
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Du får svara på frågor om ditt
                                    allmäntillstånd, dina arbetsförhållanden och
                                    tidigare erfarenheter av glasögon. (Ta gärna
                                    med eventuella tidigare glasögon till
                                    synundersökningen.)
                                </p>
                            </li>
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Vi mäter avståndet mellan dina ögons
                                    synaxlar för att kunna placera glasen rätt i
                                    bågen.
                                </p>
                            </li>
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Ögonens rörelser och samarbete samt
                                    pupillreflexer kontrolleras.
                                </p>
                            </li>
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Synskärpan utan korrektion testas. Därefter
                                    undersöker vi ögonens brytning.
                                </p>
                            </li>
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Höger och vänster ögon koordineras och
                                    ögonens samspel undersöks.
                                </p>
                            </li>
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Korrektionsbehovet för läsning samt ögonens
                                    samspel på nära håll kontrolleras.
                                </p>
                            </li>
                            <li>
                                <p className="DescCustomPC font-semibold text-[#00544a]">
                                    Gemensamt går vi igenom möjligheterna att
                                    korrigera ditt synfel och ger dig råd om de
                                    bästa produkterna för din syn.
                                </p>
                            </li>
                            <figcaption className="font-Exo">
                                Hos oss kan du alltid känna dig trygg
                                medsynundersökningen.
                            </figcaption>
                            <figcaption className="font-Exo">
                                Våra optiker är legitimerade och arbetar efter
                                ett kvalitetssäkrat system – allt för dina ögons
                                bästa.
                            </figcaption>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VisionPost2;
