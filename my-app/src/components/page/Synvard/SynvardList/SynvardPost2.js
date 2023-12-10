import WellcomeImg from "../../../assets/WellcomeImg.jpg";
const SynvardPost2 = () => {
    return (
        <div className=" flex flex-col  justify-center items-center ">
            <div className="w-[calc(100%-10%)]    ">
                <div className="dt:flex dt:flex-row flex flex-col-reverse dt:gap-9">
                    <img
                        src={WellcomeImg}
                        alt="WellcomeImg"
                        className="dt:w-2/5 mt-[20px]  rounded-[20%] object-cover"
                    />
                    <div className=" flex flex-col dt:w-3/5   ">
                        <h2 className="h2CustomPC text-[1.5rem] text-center mt-[40px] py-[20px] bg-premierColor rounded-[20%] dt:rounded-none text-[#fff]">
                            SÅ HÄR GÅR SYNUNDER SÖKNINGEN TILL HOS OSS
                        </h2>

                        <ol
                            start={1}
                            className="dt:flex dt:flex-col list-decimal ml-7 mt-7 flex flex-col gap-y-6"
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
export default SynvardPost2;
