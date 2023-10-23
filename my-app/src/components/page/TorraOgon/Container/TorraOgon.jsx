import TorraList1 from "../TorraPostList/TorraList1";
import TorraList2 from "../TorraPostList/TorraList2";
const TorraOgon = () => {
    const TorraDataList = [
        {
            title: "VAD KAN JAG GÖRA?",
            desc: "Vid exempelvis bildskärmsarbete kan du prova att sänka bildskärmen. Att placera den nedsänkt i skrivbordet under en glasskiva kan göra underverk. Försök att inte anstränga ögonen i onödan, blunda med jämna mellanrum och ta gärna regelbundna pauser vid synintensiva sysslor som läsning, bildskärmstittande och TV-tittande.",
        },
        {
            title: "KAN JAG BÄRA KONTAKTLINSER?",
            desc: "En kontaktlins ska flyta ovanpå ögats tunna skikt av tårvätska. Vid för tunt skikt strandar linsen och börjar skava. Detta kan ge upphov till klåda, sveda eller ”grus i ögonen”. Har du extremt torra ögon är det därför lämpligare att bära glasögon. Speciellt eftersom torra ögon blir ännu lite torrare om du använder kontaktlinser. Har du däremot allmänt torra ögon finns det numera kontaktlinser du mycket väl kan bära med bästa synkomfort.",
            question: "Fråga oss om hur dina möjligheter ser ut!",
        },
    ];
    return (
        <>
            <TorraList1
                title={TorraDataList[0].title}
                desc={TorraDataList[0].desc}
            />
            <TorraList2
                title={TorraDataList[1].title}
                desc={TorraDataList[1].desc}
                question={TorraDataList[1].question}
            />
        </>
    );
};
export default TorraOgon;
