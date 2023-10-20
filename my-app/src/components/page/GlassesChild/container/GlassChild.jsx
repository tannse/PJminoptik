import GCListimg from "../GCpostlist/GCListImg";
import GCpostlist1 from "../GCpostlist/GCpostlist1";
import GCpostlist2 from "../GCpostlist/GCpostlist2";
import GCpostlist3 from "../GCpostlist/GCpostlist3";
import GCpostlist4 from "../GCpostlist/GCpostlist4";
import GCpostlist5 from "../GCpostlist/GCpostlist5";

const GlassChild = () => {
    const PostGlassChild = [
        {
            id: "gc1",
            title: "BRA SYN GER EN BÄTTRE START!",
            desc: {
                first: "Ett barns syn utvecklas från födseln och fram till ca 10 år. Vid 10 år säger man att synen är fullt utvecklad. Nyföddas syn  kontrolleras normalt vid besök på barnavårdscentralen. ",
                second: "Finns det särskilda riskfaktorer, t.ex. om båda föräldrarna har synproblem, brytningsfel eller skelning – är det viktigt att ta hänsyn till detta och vara extra noggrann med att följa upp barnets synkurva. ",
                third: "Finns det inte någon misstanke om att barnet har någotsynfel, genom observation eller ärftliga faktorer – så finns det ingen anledning att göra några extra åtgärder för att kontrollera synen på barnet.",
            },
        },
        {
            id: "gc2",
            title: "HUR BRA SER DITT BARN?!",
            desc: {
                first: "Det kan självklart vara svårt att avgöra om ett barn har synproblem. ",
                second: "Vissa saker kan man däremot ta som tecken på ett eventuellt synproblem: om spädbarnet gnuggar sig ovanligt mycket i ögonen om man ser att barnet har en onormalt formad pupill; ",
                third: " onormala rörelser hos ögonen skelning; eller om barnet trillar eller går in i saker ofta.  Uppvisar barnet något av detta, bör man kontakta en optiker eller ögonläkare för en synkontroll.",
            },
        },
        {
            id: "gc3",
            title: "SYN OCH INLÄRNING!",
            desc: {
                first: "Synen påverkar hur vi uppfattar och sorterar intryck och därmed är en viktig faktor i inlärningsprocessen.",
                second: "I inlärningen krävs inte bara ett bra synminne, utan även förmågan att kunna koncentrera sig för att utesluta irrelevanta synintryck från omgivning.  Stor del av undervisningen pågår på tavlan/whiteboarden bakom läraren. Därför måste man som barn ha full kontroll över ögonens förmåga att anpassa sig – för att kunna fokusera växelvis på läraren, på tavlan och i böckerna. Ögonen måste även kunna fokusera, för att bokstäverna inte ska “hoppa” eller uppfattas som dubbla. ",
                third: "Har man som barn svårt att se, kan det förutom att påverka inlärningen och skolarbetet – även påverka till att man får en ökad koncentrationssvårighet, brist på att vilja lära sig nytt, svårigheter med den fria läsningen, spel, pussel, teckning, lek etc. ",
                four: "Uppvisar barnet synproblem, som t.ex att barnet kisar, svårt med fokus och avståndsbedömning – kontakta alltid din optiker eller ögonläkare för en synkontroll.",
            },
        },
        {
            id: "gc4",
            title: "BRA GLAS ÄR A OCH O",
            desc: {
                first: "Skydda ditt barns ögon med kvalitetsglas, för bästa möjliga effekt och skydd. Det är viktigt att man får glasögon med lämpliga glasögonglas, anpassade till barnets ansikte. Ansiktsproportionerna är olika, och bågarna utformas för att ta hänsyn till detta.",
                second: "I dag gör barn många läxor online, samt att de flesta barn också använder datorer och digital enheter på sin fritid.Glasögon med en bra antireflexbehandling som filtrerar bort blått ljus är en bra investering, som ger ögonen extraskydd. Barn kan även ha en extra känslighet mot UV-strålning – därför är det även viktigt att se till att barn användersolglasögon vid behov eller har glas med en UV-blockerande antireflexbehandling.",
            },
        },
        {
            id: "gc5",
            title: "GLAS SOM TÅL BUS OCH LEK!",
            desc: {
                first: "De glas vi på Min Optik rekommenderar, är alltid av högsta kvalitet – anpassade för barns bus och lek. Glasen är utformade för att på bästa sätt stå emot fett, damm, repor och olika väderförhållanden.",
                second: "Har du frågor om vårt sortiment för barn – ring oss eller besök någon av våra butiker. Varmt välkommen!",
            },
            tips: {
                tip: "tips!",
                desc: "Vill du veta mer om våra glasögon för barn, gå gärna in på Hoya Kids. Hoya är vår kvalitetsleverantör av glasögonglas, optimalt anpassade för både barn och vuxna.",
            },
        },
    ];
    return (
        <>
            <GCpostlist1
                title={PostGlassChild[0].title}
                desc={PostGlassChild[0].desc}
            />
            <GCpostlist2
                title={PostGlassChild[1].title}
                desc={PostGlassChild[1].desc}
            />
            <GCpostlist3
                title={PostGlassChild[2].title}
                desc={PostGlassChild[2].desc}
            />
            <GCListimg />
            <GCpostlist4
                title={PostGlassChild[3].title}
                desc={PostGlassChild[3].desc}
            />
            <GCpostlist5
                title={PostGlassChild[4].title}
                desc={PostGlassChild[4].desc}
                tipsok={PostGlassChild[4].tips}
            />
        </>
    );
};
export default GlassChild;
