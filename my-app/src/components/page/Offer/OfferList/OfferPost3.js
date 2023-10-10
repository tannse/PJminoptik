import { motion } from "framer-motion";
import { ShowLeftAnimate } from "../../../Card UI/Animation";

const OfferPost3 = () => {
    return (
        <section className="h-fit flex flex-col items-center dt:flex-row justify-center mt-[5rem] ">
            <div className="w-[calc(100%-20%)]  ">
                <motion.div
                    {...ShowLeftAnimate}
                    className="dt:w-[50%] flex flex-col gap-5  "
                >
                    <h2
                        className="h2CustomMobile text-[#00544a]
                        "
                    >
                        VÄLKOMMEN TILL VÅR NYA TJÄNST LENSREFILL
                    </h2>
                    <hr className="dt:mt-3 dt:w-[50%] " />
                    <p className="DescCustomPC  mt-5">
                        Tjänsten är framtagen för att underlätta för dig som
                        konsument att beställa hem nya linser när de gamla
                        håller på att ta slut. Det hela är mycket enkelt!
                    </p>
                    <h3 className="h3CustomPC text-[#00544a] dt:mt-5 ">
                        Följ nedanstående steg och kom igång redan idag:
                    </h3>
                    <div className="flex flex-col gap-6 dt:mt-5 dt:ml-5">
                        <ol start={1} className="list-decimal ">
                            <li className="DescCustomPC">
                                Ladda ner valfri QR-läsare till din smarta
                                telefon via Appstore/ Android Market.
                            </li>
                            <li className="DescCustomPC">
                                För att beställa nya linser scannar du QR-koden
                                på linsboxen.
                            </li>
                            <li className="DescCustomPC">
                                Skriv in ditt personnummer & din e-mailadress
                            </li>
                            <li className="DescCustomPC">
                                Välj om du önskar få linserna hemskickade och
                                betala med Swish
                            </li>
                            <li className="DescCustomPC">
                                Tryck beställ – samma antal linser som vid ditt
                                tidigare köp beställs hem och butiken <br />
                                skickar dem hem till dig eller meddelar dig när
                                linserna finns för avhämtning i butik.
                            </li>
                        </ol>
                        <div className="DescCustomPC">
                            * Ett bekräftelsemail skickas till e-post adressen
                            du angivit.
                        </div>

                        <button className="StyleButtonNav">
                            Läser mer här
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default OfferPost3;
