import MiddleContent from "./MiddleContent";
const MiddleContentData = () => {
    const DataMiddle = {
        title: "HÄLSO- OCH SJUKVÅRDSDELEN I EN OPTIKERVERKSAMHET BESTÅR AV",
        option1: "Synundersökning",
        option2: "Ordination",
        option3: "Tillpassning av optiska synhjälpmede",
        descO1: "Leg optiker utför drygt 90 procent av synundersökningarna och ordinationerna av synhjälpmedel. Resten görs av ögonläkare och avser främst barn under åtta år. För en leg optiker är det viktigt att ha känsla för patienter/kunder. Patientens förväntningar och synsituation i arbetet och på fritiden är viktiga utgångspunkter.",
        descO1b:
            "Synundersökningen inleds med en bedömning av ögat för att helst utesluta misstanke om ögonsjukdom, som i så fall remitteras till ögonläkare. Leg optiker mäter ögonens optiska brytkraft, eventuella felsyntheter och bedömer ögonens inbördes samarbete. Stor vikt läggs vid patientens/kundens arbete och synavstånd där. Synkorrektionen bestäms som ett resultat av undersökningen och i samråd med patienten.",
        descO2: "För att ordinera rätt synhjälpmedel måste leg optikern förstå patientens behov och önskemål. Det finns tre huvudtyper av optiska synhjälpmedel:",
        descO2b:
            " är det i särklass mest använda synhjälpmedlet. Det finns ett stort utbud av glastyper för olika behov och önskemål. Det sker en teknologiskutveckling av glasen samtidigt som modeinslaget blir allt större i själva bågarna.",
        descO3: " är ett alternativ och komplement till glasögon. Linser och skötselsystem utvecklas mot allt större säkerhet och mer komfortabeltbärande. Kontaktlinspatienterna kommer på regelbundna återbesök. Leg optiker får därför en personlig relation till sina patienter/kunder.",
        descO4: " synhjälpmedel. Många, framför allt äldre personer, drabbas av synnedsättande åldersförändringar/sjukdomar vilket gör att förstorande hjälpmedel blir det enda alternativet för seende på nära håll. På syncentraler provar leg optiker ut synhjälpmedel till de mest svagsynta.",
    };
    return <MiddleContent DataMiddle={DataMiddle} />;
};
export default MiddleContentData;
