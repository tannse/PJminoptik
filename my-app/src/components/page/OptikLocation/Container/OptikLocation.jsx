import OptikLocationPost1 from "../MapPostlist/OptikLocationPost1";
import OptikLocationPost2 from "../MapPostlist/OptikLocationPost2";
import OptikLocationPost3 from "../MapPostlist/OptikLocationPost3";
import OptikLocationPost4 from "../MapPostlist/OptikLocationPost4";
import OptikLocation5 from "../MapPostlist/OptikLocationPost5";
const OptikLocation = () => {
    const OptikLocationData = [
        {
            id: "ols1",
            title: "Kontakta MinOptik",
            desc: "Vi tillhandahåller glasögon & och ögontestningstjänster",
        },
        {
            id: "ols2",
            title: { first: "Kontakta oss", second: "VISION" },
            desc: {
                first: "Just nu är det många som vill komma i kontakt med oss. Vi gör allt vi kan för att besvara din fråga så fort som möjligt. Använd gärna e-post i så stor utsträckning det går.Vi svarar på e-post och andra meddelanden så snart vi bara kan inom 48 timmar.",
                second: "Vi vill ge Dig som glasögonbärare eller linsanvändare en verklig chans att få en objektiv syn på Ditt behov.  Detta behov styrs självklart av Ditt synfel men till mycket stor del i det råd Du får av oss.   Vi har erfarenheten och Du ska kunna lita på oss. Vi har åtskilliga referenser att lämna, detta för att få Dig att känna en…… trygghet från första dagen med Din personliga Optiker.",
            },
            email: "info@minoptik.se",
            telefone: "08908888888",
            facebook: ":Skriv till oss på Messenger",
            adress: "MinOptik AB , Velligen ABC",
        },
        {
            id: "ols3",
            title: {
                first: "EN DEL AV SYNOLOGEN",
                second: "SVERIGE ÄR FULLT AV FRIA OPTIKER",
            },
            desc: {
                first: "Synologen är en frivilligorganisation för fristående optiker. Vi är över hundra optiker över hela landetsom valt att stå utanför de stora kedjorna och som alla arbetar under sitt eget varumärke.",
                second: "Vi är alla fria att välja vårt eget sortiment av bågar och att genomföra våra undersökningar utifrån våra kunders behov. Till skillnad från andra är Synologens optiker dessutom de enda i Sverige som är ISO-certifierade inom kvalitet och miljö.",
                third: "Gemensamt för oss alla är att vi bedriver en seriös och högkvalitativ optikerverksamhet, och att vi fokuserar på individuell ögonhälsa.Med högutbildad personal, avancerad utrustning och omfattande undersökningar, ger vi dig individuellt anpassade rekommendationer och synlösningar. För ingen har ögon som du.",
            },
        },
        {
            id: "ols4",
            title: "ALLT FLER BEHÖVER KVALIFICERAD ÖGONHÄLSOVÅRD",
            desc: "Behovet av kvalificerad ögonhälsovård har aldrig varit större än nu.  Vi lever allt längre, vilket innebäratt de flesta av oss får åldersrelaterade synförändringar så småningom. Dessutom spenderar vi alltmer tid framför skärmar och allt minde tid utomhus. Det gäller framför allt bland barn och unga, därandelen närsynta nu ökar dramatiskt. Men med en kvalificerad ögonhälsovård, individuella undersökningar ochåtgärder så kan vi faktiskt bromsa närsyntheten och många framtida ögonkomplikationer.",
        },
        {
            id: "ols5",
            title: "OMFATTANDE UNDERSÖKNINGAR",
            desc: "Som fristående optiker har vi stora möjligheter att anpassa våra undersökningar till vårakunders individuella behov. Det har resulterat i att våra undersökningar är längre och meromfattande än andras, vilket i sin tur innebär att vi kan erbjuda mer individanpassaderekommendationer och synlösningar. Dessutom har vi ett nära samarbete medlokala ögonläkare om det skulle behövas.",
        },
        //
        {
            id: "ols5",
            title: "SYNUNDERSÖKNINGAR",
            desc: "Inkluderar bland annat mätning av synskärpa, undersökning av ögonrörelser,  samsyn och pupillreflexer,samt utprovning av glasstyrka.",
        },
        {
            id: "ols7",
            title: "KONTAKTLINS UNDERSÖKNINGAR",
            desc: "Med utgångspunkt i en synundersökninggör vi hären mer specifik analys.Vi mäter bland annat dinaögons form undersöker hornhinnan och mäter tårvätskans kvalitet.",
        },
        {
            id: "ols8",
            title: "GLASÖGON SOM INTE ALLA ANDRA HAR",
            desc: "Att arbeta som fri optiker har också den fördelen att vi själva väljer vilket sortiment av bågar och glasvi vill ha. Det betyder att du slipper det likriktade utbudet som kedjorna har. Vi har handplockadedesignerbågar. Och har vi inte just den båge du vill ha, så kan vi förmodligen ta hem den bara för dig!",
        },
        {
            id: "ols9",
            title: "VÅRT TEAM",
            desc: "På Min Optik är vi ett härligt team – som gör allt för att du som kund, ska känna dig riktigt nöjd när du går hem med dina nya glasögon eller linser.  Vår Optiker Charlotta är leg. kontaktlinsoptiker och kan guida Dig fram till en bättre syn – både för dig själv och för dina ögon. Charlotta har jobbat i optikbranschen i över 25 år och har varit drivande i att hålla sitt företag Min Optik i framkant. Vi använder de senaste metoderna och instrumenten – allt för att kunna ge dig bäst resultat och kvalitet.",
        },
    ];
    return (
        <>
            <OptikLocationPost1
                title={OptikLocationData[0].title}
                desc={OptikLocationData[0].desc}
            />
            <OptikLocationPost2
                FirstTitle={OptikLocationData[1].title.first}
                SecondTitle={OptikLocationData[1].title.second}
                FirstDesc={OptikLocationData[1].desc.first}
                SecondDesc={OptikLocationData[1].desc.second}
                email={OptikLocationData[1].email}
                telefone={OptikLocationData[1].telefone}
                facebook={OptikLocationData[1].facebook}
                adress={OptikLocationData[1].adress}
            />
            <OptikLocationPost3
                FirstTitle={OptikLocationData[2].title.first}
                SecondTitle={OptikLocationData[2].title.second}
                FirstDesc={OptikLocationData[2].desc.first}
                SecondDesc={OptikLocationData[2].desc.second}
                ThirdDesc={OptikLocationData[2].desc.third}
                TitleItem2={OptikLocationData[3].title}
                DescItem2={OptikLocationData[3].desc}
                TitleItem3={OptikLocationData[4].title}
                DescItem3={OptikLocationData[4].desc}
            />
            <OptikLocationPost4
                TitleItem4={OptikLocationData[5].title}
                DescItem4={OptikLocationData[5].desc}
                TitleItem5={OptikLocationData[6].title}
                DescItem5={OptikLocationData[6].desc}
                TitleItem6={OptikLocationData[7].title}
                DescItem6={OptikLocationData[7].desc}
            />
            <OptikLocation5
                title={OptikLocationData[8].title}
                desc={OptikLocationData[8].desc}
            />
        </>
    );
};
export default OptikLocation;
