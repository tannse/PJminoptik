import { motion } from "framer-motion";
import { ShowLeftAnimate } from "../../../Card UI/Animation";

const OfferPost3 = () => {
    return (
        <section className="h-[55vh] flex justify-center mt-[120px]">
            <div className="w-[calc(100%-240px)]  ">
                <motion.div {...ShowLeftAnimate} className="w-[50%]  ">
                    <h2
                        className="h2CustomPC text-[#00544a]
                        "
                    >
                        VÄLKOMMEN TILL VÅR NYA TJÄNST LENSREFILL
                    </h2>
                    <hr className="mt-3 w-[50%] " />
                    <p className="DescCustomPC  mt-5">
                        Tjänsten är framtagen för att underlätta för dig som
                        konsument att beställa hem nya linser när de gamla
                        håller på att ta slut. Det hela är mycket enkelt!
                    </p>
                    <h3 className="h3CustomPC text-[#00544a] mt-5 ">
                        Följ nedanstående steg och kom igång redan idag:
                    </h3>
                    <div className="mt-5 ml-5">
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
