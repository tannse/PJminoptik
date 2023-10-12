import WorkGlassPost1 from "../WorkGlassPost/WorkGlassesPort1";
import WorkGlassPost2 from "../WorkGlassPost/WorkGlassesPort2";
import WorkGlassPost3 from "../WorkGlassPost/WorkglassessPost3";
import WorkGlassPost4 from "../WorkGlassPost/WorkGlassPost4";

const WorkGlasses = () => {
    const PostDataWG = [
        {
            id: "wg1",
            title: "ETT NYTT PERSPEKTIV PÅ JOBBET!",
            desc: {
                first: "Av människor som jobbar på kontor/inhomhus har ca 70% konstaterats ha mer eller mindre problem med stelhet och värk i nack- och skulderregionen.",
                second: "Vanligt vid t.ex bildskärmsarbete är att man tvingas böja huvudet bakåt för att kunna se ordentligt. Detta leder ofta till stelhet och värk i både nacke och axlar, huvudvärk, ansträngda ögon och på lite sikt långtidssjukskrivning.",
            },
        },
        {
            id: "wg2",
            title: "ARBETSGLASÖGON",
            desc: {
                first: "Med arbetsglasögon slipper du en ansträngd arbetsställning och får en mycket bättre arbetssituation. Arbetsglasögon anpassas efter individuella behov. Arbetsrörelser – främst huvudrörelser – blir naturligare. Kropp och ögon trivs bättre, och det blir lättare att utföra ett bra jobb. Det är därför arbetsglasögon har blivit en lagstadgad rättighet.",
                second: "Exempel på yrkesgrupper som kan ha behov av – och rätt till speciellt arbetsplatsanpassade glasögon/skyddsglasögon :",
                third: "Förutom dessa yrkesgrupper, kan man generellt även säga att de flesta 40+ har svårigheter med att läsa och arbeta pånära håll och behöver speciellt anpassade arbetsglasögon.",
            },
            job: {
                1: "Apotekare",
                2: "Målare",
                3: "Montörer",
                4: "Lagerarbetare",
                5: "Verkstadsarbetare",
                6: "Laboratoriepersonal",
                7: "Kassapersonal",
                8: "Bildskärmsarbetare",
            },
        },
        {
            id: "wg3",
            title: "TRIVS DINA ÖGON, TRIVS DIN KROPP!",
            desc: {
                first: "Individuellt anpassade arbetsglasögon ger ett helt nytt perspektiv på ditt arbete. Du behöver inte flytta stolen, skärm och dig själv fram och tillbaka – för att hitta rätt fokus. Bra arbetsglasögon är en bra investering för både din hälsa och ditt välbefinnande.",
                second: "Har du frågor om arbetsglasögon – ring eller besök någon av våra butiker. Varmt välkommen!",
            },
        },
        {
            id: "wg4",
            title: "Tips!",
            desc: "Vill du veta mer om våra arbetsglasögon, gå gärna in på Zeiss Arbetsglasögon och läs mer. Zeiss är vår kvalitetsleverantör av glasögonglas, optimalt anpassade för alla sorters glasögon.",
        },
    ];
    return (
        <>
            <WorkGlassPost1
                key={PostDataWG[0].id}
                title={PostDataWG[0].title}
                desc={PostDataWG[0].desc}
            />
            <WorkGlassPost2
                title={PostDataWG[1].title}
                desc={PostDataWG[1].desc}
                job={PostDataWG[1].job}
            />
            <WorkGlassPost3
                title={PostDataWG[2].title}
                desc={PostDataWG[2].desc}
                job={PostDataWG[2].job}
            />
            {/* <WorkGlassPost4
                title={PostDataWG[3].title}
                desc={PostDataWG[3].desc}
            /> */}
        </>
    );
};
export default WorkGlasses;
