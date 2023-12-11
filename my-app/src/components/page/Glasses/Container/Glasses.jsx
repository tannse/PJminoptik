import GlassPost1 from "../GlassesPosts/GlassesPost1";
import GlassPost2 from "../GlassesPosts/GlassesPost2";
import GlassPost3 from "../GlassesPosts/GlassesPost3";

const Glasses = () => {
    const Glassesdata = [
        {
            title: {
                first: "KONTAKTLINSER ELLER GLASÖGON?",
                second: "Vi bör granska detta mer detaljerat!",
            },
            desc: {
                first: "Linser ger dig en fantastisk frihet. Kontaktlinser är lätta att vänja sig vid, erbjuder ett obegränsat synfält och kan i många fall korrigera synen bättre än glasögon. Lever du dessutom ett aktivt liv är kontaktlinser ett självklart val.",
                second: "Vill du inte göra avkall på något? Välj både och!",
            },
        },
        {
            title: {
                first: "Vill du inte göra avkall på något? Välj både och!",
                third: "KONTAKTLINSER",
                second: "GLASÖGON",
            },
            desc: {
                first: "Glasögon - för dig som både vill se och synas.",
                second: "Glasögon förstärker din personlighet och låter dig följa med i modets svängningar. Numera är dessutom glasen så tunna, lätta och snygga att de nästan kan sättas in i vilken båge du vill, oavsett synfel!",
                third: "Den nya generationens kontaktlinser känns bara som en droppe vatten.",
                four: "Du som är närsynt, översynt, ålderssynt, astigmatiker eller lite av varje, kan så gott som alltid få ett seende i klass med det naturliga med hjälp av linser. Det gäller också dig med torra ögon.",
                five: "Och de är lika behagliga att bära som det låter. Prova linser redan idag!",
                six: "Men kom ihåg att du också behöver glasögon. Det finns dagar när du är förkyld och dina ögon behöver vila.",
            },
        },
        {
            title: "VI HAR BLICK FÖR ALLT!",
            desc: "Glasögon är form, funktion och komfort i ett. Därför är det viktigt att du går till en optiker som har öga för allt. Hos oss kan du inte bara få en synkomfort utöver det vanliga. Du kan också få hjälp att förstärka din identitet och utstrålning så att du får ett helt nytt jag. Dina valmöjligheter är i det närmaste obegränsade.",
        },
    ];
    return (
        <>
            <GlassPost1
                glasstitl1={Glassesdata[0].title.first}
                glasstitl2={Glassesdata[0].title.second}
                glassdes1={Glassesdata[0].desc.first}
            />
            <GlassPost2
                glass2titl1={Glassesdata[1].title.first}
                glass2titl2={Glassesdata[1].title.second}
                glass2titl3={Glassesdata[1].title.third}
                glass2des1={Glassesdata[1].desc.first}
                glass2des2={Glassesdata[1].desc.second}
                glass2des3={Glassesdata[1].desc.third}
                glass2des4={Glassesdata[1].desc.four}
                glass2des5={Glassesdata[1].desc.five}
                glass2des6={Glassesdata[1].desc.six}
                glass2des7={Glassesdata[1].desc.seven}
            />
            <GlassPost3
                glass3tit={Glassesdata[2].title}
                glass3des={Glassesdata[2].desc}
            />
        </>
    );
};
export default Glasses;
