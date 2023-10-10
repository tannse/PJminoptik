import IntroPost1 from "../IntroList/IntroPost1";
import IntroPost2 from "../IntroList/IntroPost2";
import IntroPost3 from "../IntroList/IntroPost3";
const Intro = () => {
    const IntroData = [
        // List1
        {
            id: "IT1",
            title: " VAD GÖR EN OPTIKER?",
            desc: {
                first: "Optikeryrket är ett akademiskt legitimationsyrke Din utbildning får Du på Karolinska institutet eller vid Kalmar högskola, f n tre år.",
                second: "Du får, efter optikerexamen och fil. kand.examen, socialstyrelsens legitimation för optikeryrket och behörighet för  kontaktlinsverksamhet. Dukommer att arbeta självständigt med eget  yrkesansvar under samma lagstiftning, som gäller på sjukhus och vårdcentraler.",
            },
        },
        // List2
        {
            id: "IT2",
            title: "HÄLSO- OCH SJUKVÅRDSDELEN I EN OPTIKERVERKSAMHET BESTÅR AV",
            option: {
                first: "Synundersökning",
                second: "Ordination",
                third: "Tillpassning av optiska synhjälpmede",
            },

            desc: {
                first: "Leg optiker utför drygt 90 procent av synundersökningarna och ordinationerna av synhjälpmedel. Resten görs av ögonläkare och avser främst barn under åtta år. För en leg optiker är det viktigt att ha känsla för patienter/kunder. Patientens förväntningar och synsituation i arbetet och på fritiden är viktiga utgångspunkter.",
                second: "Synundersökningen inleds med en bedömning av ögat för att helst utesluta misstanke om ögonsjukdom, som i så fall remitteras till ögonläkare. Leg optiker mäter ögonens optiska brytkraft, eventuella felsyntheter och bedömer ögonens inbördes samarbete. Stor vikt läggs vid patientens/kundens arbete och synavstånd där. Synkorrektionen bestäms som ett resultat av undersökningen och i samråd med patienten.",
                third: "För att ordinera rätt synhjälpmedel måste leg optikern förstå patientens behov och önskemål. Det finns tre huvudtyper av optiska synhjälpmedel:",
                four: " är det i särklass mest använda synhjälpmedlet. Det finns ett stort utbud av glastyper för olika behov och önskemål. Det sker en teknologiskutveckling av glasen samtidigt som modeinslaget blir allt större i själva bågarna.",
                five: " är ett alternativ och komplement till glasögon. Linser och skötselsystem utvecklas mot allt större säkerhet och mer komfortabeltbärande. Kontaktlinspatienterna kommer på regelbundna återbesök. Leg optiker får därför en personlig relation till sina patienter/kunder.",
                sixth: " synhjälpmedel. Många, framför allt äldre personer, drabbas av synnedsättande åldersförändringar/sjukdomar vilket gör att förstorande hjälpmedel blir det enda alternativet för seende på nära håll. På syncentraler provar leg optiker ut synhjälpmedel till de mest svagsynta.",
            },
        },
        // List3
        {
            id: "IT3",
            title: "Upptäck Resan till Optikerprogrammet vid Karolinska Institutet-",
        },
    ];

    return (
        <>
            <IntroPost1 title={IntroData[0].title} desc={IntroData[0].desc} />
            <IntroPost2
                title={IntroData[1].title}
                option={IntroData[1].option}
                desc={IntroData[1].desc}
            />
            <IntroPost3 title={IntroData[2].title} />
        </>
    );
};
export default Intro;
