import Item1Content from "./Item1Content";
import Item2Content from "./Item2Content";
import Img1Between from "../Card UI/ImgBetween";
import Item3Content from "./Item3Content";
import Img2Between from "../Card UI/Img2Between";
import Item4Content from "./Item4Content";
import Item5Content from "./Item5Content";
// import Img3Between from "../Card UI/
const MainContent = () => {
    return (
        <div>
            <Item1Content />
            <Img1Between />
            <Item2Content />
            <Img2Between />
            <Item3Content />
            <Img2Between />
            <Item4Content />
            <Img2Between />
            <Item5Content />
        </div>
    );
};
export default MainContent;
