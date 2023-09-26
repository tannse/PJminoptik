import TopContentData from "./TopContentData";
const AboutTopContent = () => {
    const Data = {
        Title: " VAD GÖR EN OPTIKER?",
        Desc1: "Optikeryrket är ett akademiskt legitimationsyrke Din utbildning får Du på Karolinska institutet eller vid Kalmar högskola, f n tre år.",
        Desc2: " Du får, efter optikerexamen och fil. kand.examen, socialstyrelsens legitimation för optikeryrket och behörighet för  kontaktlinsverksamhet. Dukommer att arbeta självständigt med eget  yrkesansvar under samma lagstiftning, som gäller på sjukhus och vårdcentraler.",
    };

    return (
        <div>
            <TopContentData Data={Data} />
        </div>
    );
};
export default AboutTopContent;
