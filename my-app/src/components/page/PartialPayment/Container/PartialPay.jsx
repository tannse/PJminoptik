import PartialPayPost1 from "../PartialPayPost/PartialPayPost1";
import PartialPayPost2 from "../PartialPayPost/PartialPayPost2";
import VisionPost3 from "../../VisionCare/VisionList/VisionPost3";
const PartialPay = () => {
    const PartialData = [
        {
            title: {
                first: "MinOptik",
                Second: "Delbetala Planer",
                Third: "FÖRMÅNLIG FINANSIERING",
            },
            desc: {
                first: "Dela upp din betalning – upp till 12 månader räntefritt",
                Second: " I månadsbeloppen ingår amortering och ev. ränta. Ev. administrations- och uppläggningsavgift tillkommer efter aktuellt val. Lägsta månadsbetalning är f n 125:-, högre belopp medför kortare betalningstid. För vidare information se kontovillkoren.",
            },
            desc2: {
                1: "Synologen kan i samarbete med Resurs Bank erbjuda dig en helt kostnadsfri delbetalning i 6 månader.",
                2: "Inköpsmånaden är helt betalningsfri, därefter betalar du 1/6 av ditt inköp i 6 månader.",
                3: "Du kan även välja att delbetala i 12 månader, se avgifter för detta alternativ i tabellen.",
                4: "Du ansöker om de olika alternativen i kassan – snabbt och smidigt. Du får kreditbesked direkt och kan utnyttja din kredit omedelbart.En sedvanlig kreditprövning görs.",
            },
        },
        {
            title: {
                first: "SÅ HÄR KAN DU BETALA:",
                second: "RESURS BANK",
            },
            desc: {
                first: "Se i tabellen vad månadsbeloppen blir vid olika köpbelopp och delbetalningsplaner.",
                second: "På Resurs Banks hemsida, www.resurs.se, kan du bl.a. se ditt saldo på kontot, din senaste inbetalning och ett kontoutdrag. Lösenord för att logga in hittar du på din avi!",
                third: "Fullständiga villkor och aktuella räntor hittar du på : www.resurs.se eller ring 042-38 20 93",
            },
            Tabellen: {
                second: "Köpbelopp",
                third: "6 mån",
                four: "12 mån",
                five: "Kostnader",
                six: "Årsränta",
                seven: "Adm.avg./mån",
                eight: "Uppläggn. avg",
            },
        },
    ];
    return (
        <>
            <PartialPayPost1
                PraTitPost1={PartialData[0].title.first}
                PraTit2Post1={PartialData[0].title.Second}
                PraTit3Post1={PartialData[0].title.Third}
                PraDes1Post1={PartialData[0].desc.first}
                PraDes2Post1={PartialData[0].desc.Second}
                PraDesclistPost1={PartialData[0].desc2}
            />
            <PartialPayPost2
                PraTitPost2={PartialData[1].title.first}
                PraTit2Post2={PartialData[1].title.second}
                PraDes1Post2={PartialData[1].desc.first}
                PraDes2Post2={PartialData[1].desc.second}
                PraDes3Post2={PartialData[1].desc.third}
                // Tabbel
                kopbelopp={PartialData[1].Tabellen.second}
                sixmonth={PartialData[1].Tabellen.third}
                twelvemonths={PartialData[1].Tabellen.four}
                Kostnader={PartialData[1].Tabellen.five}
                Annualinterest={PartialData[1].Tabellen.six}
                Admavg={PartialData[1].Tabellen.seven}
                Uppläggn={PartialData[1].Tabellen.eight}
            />
            <VisionPost3 />
        </>
    );
};
export default PartialPay;
