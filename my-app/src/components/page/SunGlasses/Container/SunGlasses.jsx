import SunGlassPost1 from "../SunGlassPostList/SunGlassPost1";
import SunGlassPost2 from "../SunGlassPostList/SunGlassPost2";
import SunGlassPost3 from "../SunGlassPostList/SunGlassPost3";
import SunGlassPost4 from "../SunGlassPostList/SunGlassPost4";
import SunGlassPost5 from "../SunGlassPostList/SunGlassPost5";

const SunGlasses = () => {
    const SunGlassDataList = [
        {
            id: "sg1",
            title: "SLIPADE GLASÖGON  SOLSKYDD MED STYRKA",
            desc: "Solglasögon kan slipas till nästan vilken styrka du vill. Och med rätt korrektion kan du uppnå en fantastisk synkomfort. För dig som behöver slipade solglasögon en rakare båg-design att föredra. Dessa tillåter nämligen att slipas på ett helt annat sätt än de välvda. Fråga oss vilka möjligheter du har!",
        },
        {
            id: "sg2",
            title: {
                first: "SÅ HÄR VÄLJER DU SOLGLASFÄRG",
                second: "Färger som bör undvikas oavsett vad trenderna säger är lila, rosa, rött och i synnerhet blått. Solens blåa ljus är nämligen direkt skadligt för ögonen. Väljer du då blått glas utsätter du dina ögon för maximalt mycket blått ljus, vilket leder till att gula fläcken skadas och förmågan att se skarpt försvinner – en skada som inte kan repareras.",
            },
            desc: {
                first: "Vilken färg på dina solglas du bör välja, beror på i vilket sammanhang du tänker använda dina solglasögon.",
                second: "Färger som bör undvikas oavsett vad trenderna säger är lila, rosa, rött och i synnerhet blått. Solens blåa ljus är nämligen direkt skadligt för ögonen. Väljer du då blått glas utsätter du dina ögon för maximalt mycket blått ljus, vilket leder till att gula fläcken skadas och förmågan att se skarpt försvinner – en skada som inte kan repareras..",
                third: "Vill du ändå ha blått solglas ska du välja ett glas med blå utsida och brun insida för att få ett bra solskydd.",
            },
            style: {
                1: "I dimma: Satsa på gula glas och kontrasterna ökar.",
                2: "I trafiken: Välj neutralgråa och du slipper få omgivningens färger förvrängda..",
                3: "På golfbanan: Satsa på gul-orange glas och du får lättare att urskilja bollen.",
                4: "På stranden: Välj gröna glas så ändras inte färgerna som ögat uppskattar.",
                5: "I skidbacken: Använd bruna glas och djupet och kontrasterna ökar.",
            },
        },
        {
            id: "sg3",
            title: {
                first: "OCH SOLGLASTON",
                second: "TONADE ELLER SOLSKIFTANDE?",
            },
            desc: {
                first: "Hur mörka glas du ska bör ha, kan låta lika enkelt som självklart – ju starkare ljus, desto mörkare glas. Men det beror också på hur känsliga ögon du har. Mörka glas är nästan ett måste i skidbacken eller när du är ute på sjön. Gärna i tätslutande bågar. Ljust tonade glas lämpar sig bättre i indirekt solljus eller när du bara eftersträvar ett skönare ljus. Hur många par solglasögon du behöver beror helt enkelt på vilket liv du lever",
                second: "Du kan också få solglasögon med graderat ljusgenomsläpp. Oftast är glasen mörkast upptill för att bli ljusast nedtill. Perfekt för dig som inte vill bli bländad av solen och samtidigt har insett fördelarna med att ha full koll på hastighetsmätaren.",
                third: "Vill du slippa byta solglasögon i tak med ljusets växlingar kan solskiftande (fotokromatiska) glas vara ett alternativ. Oavsett i vilken ljussituation du befinner dig, anpassar sig färgen efter rådande ljusförhållanden. Och du kan få dem som slipade. Hur smart som helst.",
            },
        },
        {
            id: "sg4",
            title: "Varumärke",
        },
        {
            id: "sg5",
            title: {
                first: "HÅLL DIG PÅ SÄKRA SIDAN",
                second: "SÅ HÄR HITTAR DU DIN RÄTTA FORM",
            },
            desc: {
                first: "Visste du att molnen släpper igenom cirka 50 procent av solens skadliga UV-strålar? Att vit sand reflekterar cirka 25 procent av ljuset och snö hela 85 procent? ",
                second: "Numera är de flesta medvetna om hur farlig UV-strålningen är. Men att det även gäller ögonen är det inte lika många som tänker på.",
                third: "Använder du glasögon utan UV-skydd luras pupillerna att öppna sig. Det leder till att ögonen exponeras för mer skadligt solljus än om du exempelvis kisar, vilket på sikt kan leda till ögonskador som exempelvis grå starr. ",
                four: "Använd därför bara solglasögon med 100 procent UV-skydd. På så sätt ökar du dina chanser att få glädje av dina ögon i många år framöver.",
                five: "Ju större bågarna är, desto svårare får ljusstrålarna att bryta sig över kanten och besvära dina ögon. Därför får solglasögon gärna vara lite större än vanliga glasögon. Du ska dock vara medveten om att ljus som kommer bakifrån lättare träffar glasets baksida och reflekteras in i ögat om du har stora solglasögon. I detta läge är en antireflexbehandling på glasens insida att rekommendera. Du kan också satsa på polaroidglas som ger mycket gott skydd mot reflexer. En annan variant är du väljer en extremt tätslutande båge som exempelvis wrap-arounds.",
            },
        },
    ];
    return (
        <>
            <SunGlassPost1
                title={SunGlassDataList[0].title}
                desc={SunGlassDataList[0].desc}
            />
            <SunGlassPost2
                titleFirst={SunGlassDataList[1].title.first}
                titleSecond={SunGlassDataList[1].title.second}
                descFirst={SunGlassDataList[1].desc.first}
                descSecond={SunGlassDataList[1].desc.second}
                descThird={SunGlassDataList[1].desc.third}
                style={SunGlassDataList[1].style}
            />
            <SunGlassPost3
                titleFirst={SunGlassDataList[2].title.first}
                titleSecond={SunGlassDataList[2].title.second}
                descFirst={SunGlassDataList[2].desc.first}
                descSecond={SunGlassDataList[2].desc.second}
                descThird={SunGlassDataList[2].desc.third}
            />
            <SunGlassPost4 title={SunGlassDataList[3].title} />
            <SunGlassPost5
                titleFirst={SunGlassDataList[4].title.first}
                titleSecond={SunGlassDataList[4].title.second}
                descFirst={SunGlassDataList[4].desc.first}
                descSecond={SunGlassDataList[4].desc.second}
                descThird={SunGlassDataList[4].desc.third}
                descFour={SunGlassDataList[4].desc.four}
                descFive={SunGlassDataList[4].desc.five}
            />
        </>
    );
};
export default SunGlasses;
